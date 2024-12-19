// import { ReactNode } from "react";
// import { Navigate } from "react-router-dom";
// import { useUserContext } from "../components/context/UserContext";

// export const RequireAuth = ({ children }: { children: ReactNode }) => {
//   const { loggedInUser } = useUserContext(); 

//   if (!loggedInUser) {
//     return <Navigate to="/auth/login" replace />;
//   }
//   return <>{children}</>;
// };

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Импортируйте RootState, чтобы указать на состояние

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const loggedInUser = useSelector(
    (state: RootState) => state.user.loggedInUser
  );

  if (!loggedInUser) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
};