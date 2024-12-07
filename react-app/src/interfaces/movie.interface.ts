export interface IFilm {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#IMG_POSTER": string;
  "#AKA": string;
  "ok": boolean;
  "description": IFilm[];
}

