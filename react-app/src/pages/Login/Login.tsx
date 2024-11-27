import AuthorizationForm from "../../layouts/AuthorizationForm/AuthorizationForm";
import { useUserContext } from "../../components/context/UserContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Login() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const { handleLogin } = useUserContext();

  return (
    <>
      <AuthorizationForm onLogin={handleLogin} />
    </>
  );
}
