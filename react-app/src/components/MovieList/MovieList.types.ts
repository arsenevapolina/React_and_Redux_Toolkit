export interface Movie {
    "#IMDB_ID": string;
    "#IMG_POSTER": string;
    "#AKA": string;
    "#RANK": number; 
    "#TITLE": string;
}

export interface MovieListProps {
    movies: Movie[];
    isLoading: boolean;
    error?: string | null; 
    noResults: boolean;
}