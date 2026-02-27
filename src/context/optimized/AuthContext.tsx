import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { User } from "../../types";

type AuthStateValue = {
  user: User | null;
  isLoggedIn: boolean;
};

type AuthActionsValue = {
  login: () => void;
  logout: () => void;
};

const AuthStateContext = createContext<AuthStateValue | null>(null);
const AuthActionsContext = createContext<AuthActionsValue | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>({
    id: "u-1",
    name: "Ada Lovelace",
    role: "Trainer",
  });

  const login = useCallback(() => {
    setUser({
      id: "u-1",
      name: "Ada Lovelace",
      role: "Trainer",
    });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const stateValue = useMemo<AuthStateValue>(() => {
    return {
      user,
      isLoggedIn: user !== null,
    };
  }, [user]);

  const actionsValue = useMemo<AuthActionsValue>(() => {
    return {
      login,
      logout,
    };
  }, [login, logout]);

  return (
    <AuthActionsContext.Provider value={actionsValue}>
      <AuthStateContext.Provider value={stateValue}>
        {children}
      </AuthStateContext.Provider>
    </AuthActionsContext.Provider>
  );
};

export const useAuthState = () => {
  const value = useContext(AuthStateContext);
  if (!value) {
    throw new Error("useAuthState must be used inside AuthProvider");
  }
  return value;
};

export const useAuthActions = () => {
  const value = useContext(AuthActionsContext);
  if (!value) {
    throw new Error("useAuthActions must be used inside AuthProvider");
  }
  return value;
};
