import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { IMDB_ID } = useParams();
  return <>MovieDetails - {IMDB_ID}</>;
}

