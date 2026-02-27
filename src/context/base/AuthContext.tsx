import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../../types";

type AuthContextValue = {
  user: User | null;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  notifications: number;
  addNotification: () => void;
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

  const [notifications, setNotifications] = useState(0);

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

  const addNotification = () => {
    setNotifications(n => n + 1);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: user !== null,
        login,
        logout,
        notifications,
        addNotification,
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
