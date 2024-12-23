export interface FavoriteMovie {
  "#IMDB_ID": string;
  "#IMG_POSTER": string;
  "#AKA": string;
  "#RANK": number;
  "#TITLE": string;
}
export interface AggregateRating {
  ratingValue?: string;
  ratingCount?: number;
}
export interface MovieDetailsProps {
  short?: {
    name?: string;
    image?: string;
    description?: string;
    genre?: string[];
    trailer?: {
      duration?: string;
    };
    aggregateRating?: AggregateRating;
  };
  imdbId: string;
}
