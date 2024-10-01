import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Title/Title";
import SearchInput from "./components/SearchInput/SearchInput";
import Form from "./layouts/Form/Form";
import TitleWithParagraph from "./layouts/TitleWithParagraph/TitleWithParagraph";
import Link from "./components/Link/Link";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Navbar from "./layouts/Navbar/Navbar";

const text =
  "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Кнопка была нажата, value:", inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className="app">
      <Header>
        <Logo />
        <Navbar>
          <Link>Поиск фильмов</Link>
          <Link img="./public/number.svg">Мои фильмы</Link>
          <Link img="./public/entrance.svg">Войти</Link>
        </Navbar>
      </Header>
      <TitleWithParagraph>
        <Title>Поиск</Title>
        <Paragraph>{text}</Paragraph>
      </TitleWithParagraph>
      <Form>
        <SearchInput
          img="./public/search.svg"
          placeholder="Введите название"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <Button onClick={handleButtonClick} text="Искать" />
      </Form>
    </div>
  );
}

export default App;
