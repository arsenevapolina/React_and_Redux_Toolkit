export interface Movie {
  id: number; 
  title: string; 
  poster: string; 
  topImage: string; 
  topText: string; 
  bottomImage: string; 
  bottomText: string; 
}

export interface MovieListProps {
  movies: Movie[];
}
