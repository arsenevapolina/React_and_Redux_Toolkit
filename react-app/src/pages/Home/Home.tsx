import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import Button from "../../components/Button/Button";
import button from "../../components/Button/Button.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import SearchInput from "../../components/SearchInput/SearchInput";
import Form from "../../layouts/Form/Form";
import SectionTitle from "../../layouts/SectionTitle/SectionTitle";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";
import { PREFIX } from "../../helpers/API";
import { IFilm } from "../../interfaces/movie.interface";

const text =
  "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const [inputValue, setInputValue] = useState<string>("");
  const [movies, setMovies] = useState<IFilm[]>([]); 

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = async (): Promise<void> => {
    if (inputValue) {
      const moviesData = await fetchMovies(inputValue);
      console.log(moviesData);
      setMovies(moviesData); 
      setInputValue(""); 
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleButtonClick();
    }
  };

  const fetchMovies = async (query: string) => {
    try {
      const response = await fetch(`${PREFIX}${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = (await response.json()) as IFilm[];
      console.log("Данные из API:", data);

      return data.description || []; 
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return [];
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