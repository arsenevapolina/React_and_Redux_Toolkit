import { useState, ChangeEvent, KeyboardEvent } from "react";
import Button from "../../components/Button/Button";
import button from "../../components/Button/Button.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import SearchInput from "../../components/SearchInput/SearchInput";
import Form from "../../layouts/Form/Form";
import SectionTitle from "../../layouts/SectionTitle/SectionTitle";
import MovieList from "../../components/MovieList/MovieList";
import movies from "../../moviesData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const text =
  "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = (): void => {
    console.log("Кнопка была нажата, value:", inputValue);
    setInputValue("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <>
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
    </>
  );
}
