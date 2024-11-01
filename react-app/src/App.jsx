import React, { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/Button/Button";
import button from "./components/Button/Button.module.css";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Title/Title";
import SearchInput from "./components/SearchInput/SearchInput";
import Form from "./layouts/Form/Form";
import SectionTitle from "./layouts/SectionTitle/SectionTitle";
import Link from "./components/Link/Link";
import Header from "./components/Header/Header";
import Navbar from "./layouts/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import movies from "./moviesData";
import AuthorizationForm from "./layouts/AuthorizationForm/AuthorizationForm";
import { useUserContext } from "./components/context/UserContext";

const text =
  "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

function App() {
  const { loggedInUser, handleLogin, handleLogout } = useUserContext();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Кнопка была нажата, value:", inputValue);
    setInputValue("");
  };

  const clickWithoutValue = () => {
    console.log("Кнопка была нажата");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  const handleCounterClick = (e) => {
    e.preventDefault();
    console.log("Счётчик был нажат");
  };

  return (
    <div className={styles.app}>
      <Header>
        <Navbar>
          <Link>Поиск фильмов</Link>
          <Link count={2} onCounterClick={handleCounterClick}>
            Мои фильмы
          </Link>
          {loggedInUser ? (
            <>
              <Link img="./public/icons/avatar.svg">{loggedInUser}</Link>{" "}
              <Link>
                <Button onClick={handleLogout}>Выйти</Button>
              </Link>
            </>
          ) : (
            <Link>
              Войти
              <Button
                img="./public/icons/entrance.svg"
                onClick={clickWithoutValue}
                className={`${button["button-link"]}`}
              />
            </Link>
          )}
        </Navbar>
      </Header>
      <SectionTitle>
        <Title>Поиск</Title>
        <Paragraph>{text}</Paragraph>
      </SectionTitle>
      <Form>
        <SearchInput
          img="./public/icons/search.svg"
          placeholder="Введите название"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          onButtonClick={() => console.log("Кнопка поиска нажата")}
        />
        <Button
          onClick={handleButtonClick}
          text="Искать"
          className={`${button["button-base"]} ${button.accent}`}
        >
          Искать
        </Button>
      </Form>
      <MovieList movies={movies} />
      <AuthorizationForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
