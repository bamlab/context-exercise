import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { User } from "../../types";

type AuthContextValue = {
  user: User | null;
  isLoggedIn: boolean;
  syncRuns: number;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>({
    id: "u-1",
    name: "Ada Lovelace",
    role: "Trainer",
  });
  const [syncRuns, setSyncRuns] = useState(0);

  const login = () => {
    setUser({
      id: "u-1",
      name: "Ada Lovelace",
      role: "Trainer",
    });
  };

  const logout = () => {
    setUser(null);
  };

  // Intentionally bad example: this side effect mirrors auth state into local
  // state and forces an extra rerender after each auth change.
  useEffect(() => {
    setSyncRuns(current => current + 1);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: user !== null,
        syncRuns,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return value;
};
