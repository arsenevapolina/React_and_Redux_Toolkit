import Button from "../../components/Button/Button";
import button from "../../components/Button/Button.module.css";
import SearchInput from "../../components/SearchInput/SearchInput";
import Title from "../../components/Title/Title";
import styles from "./AuthorizationForm.module.css";
import React, { useState } from "react";
import { useUserContext } from "../../components/context/UserContext";

function AuthorizationForm() {
  const { loggedInUser, handleLogin, handleLogout } = useUserContext();

  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleLog = () => {
    if (userName) {
      handleLogin(userName);
      setUserName("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLog();
    }
  };

  return (
    <div className={styles["form-wrapper"]}>
      <Title>Вход</Title>
      <SearchInput
        placeholder="Ваше имя"
        value={userName}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <Button
        onClick={loggedInUser ? handleLogout : handleLog}
        className={`${button["button-base"]} ${button.accent}`}
      >
        {loggedInUser ? "Выйти" : "Войти в профиль"}
      </Button>
    </div>
  );
}

export default AuthorizationForm;
