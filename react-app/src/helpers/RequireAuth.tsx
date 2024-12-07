import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../components/context/UserContext";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { loggedInUser } = useUserContext(); 

  if (!loggedInUser) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
};