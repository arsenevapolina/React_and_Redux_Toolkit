export interface Movie {
  "#IMDB_ID": string;
  "#IMG_POSTER": string;
  "#AKA": string;
  "#RANK": number; 
  "#TITLE": string;
}

export interface MovieCardProps {
  movie: Movie;
}
