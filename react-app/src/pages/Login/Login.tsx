// import AuthorizationForm from "../../layouts/AuthorizationForm/AuthorizationForm";
// import { useUserContext } from "../../components/context/UserContext";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export function Login() {
//   const location = useLocation();

//   useEffect(() => {
//     console.log(location);
//   }, [location]);

//   const { handleLogin } = useUserContext();

//   return (
//     <>
//       <AuthorizationForm onLogin={handleLogin} />
//     </>
//   );
// }


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AuthorizationForm from "../../layouts/AuthorizationForm/AuthorizationForm";
import { loginUser } from "../../store/userSlice"; // Импорт действий из userSlice

export function Login() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const handleLogin = (userName) => {
    dispatch(loginUser(userName)); // Используем dispatch для входа в систему
  };

  return (
    <>
      <AuthorizationForm onLogin={handleLogin} />
    </>
  );
}