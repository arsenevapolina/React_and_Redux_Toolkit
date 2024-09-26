import "./App.css";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Title/Title";

const text =
  "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.";

function App() {
  return (
    <>
      <Title>Поиск</Title>
      <Paragraph>{text}</Paragraph>
      <Button>Искать</Button>
    </>
  );
}

export default App;
