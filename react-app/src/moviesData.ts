interface Movie {
  id: number;
  title: string;
  poster: string;
  topImage: string;
  topText: string;
  bottomImage: string;
  bottomText: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Black Widow",
    poster: "./public/movies/black-widow.svg",
    topImage: "./public/icons/star.svg",
    topText: "324",
    bottomImage: "./public/icons/like.svg",
    bottomText: "В избранное",
  },
  {
    id: 2,
    title: "Shang Chi",
    poster: "./public/movies/shang-chi.svg",
    topImage: "./public/icons/star.svg",
    topText: "124",
    bottomImage: "./public/icons/like.svg",
    bottomText: "В избранное",
  },
  {
    id: 3,
    title: "Loki",
    poster: "./public/movies/loki.svg",
    topImage: "./public/icons/star.svg",
    topText: "235",
    bottomImage: "./public/icons/like.svg",
    bottomText: "В избранное",
  },
  {
    id: 4,
    title: "How I Met Your Mother",
    poster: "./public/movies/met-mother.svg",
    topImage: "./public/icons/star.svg",
    topText: "123",
    bottomImage: "./public/icons/like.svg",
    bottomText: "В избранное",
  },
  {
    id: 5,
    title: "Money Heist",
    poster: "./public/movies/money.svg",
    topImage: "./public/icons/star.svg",
    topText: "8125",
    bottomImage: "./public/icons/like.svg",
    bottomText: "В избранное",
  },
  {
    id: 6,
    title: "Friends",
    poster: "./public/movies/friends.svg",
    topImage: "./public/icons/star.svg",
    topText: "123",
    bottomImage: "./public/icons/like.svg",
    bottomText: "В избранное",
  },
  {
    id: 7,
    title: "The Big Bang Theory",
    poster: "./public/movies/big-bang.svg",
    topImage: "./public/icons/star.svg",
    topText: "12",
    bottomImage: "./public/icons/like.svg",
    bottomText: "В избранное",
  },
  {
    id: 8,
    title: "Two And a Half Men",
    poster: "./public/movies/half-men.svg",
    topImage: "./public/icons/star.svg",
    topText: "456",
    bottomImage: "./public/icons/like.svg",
    bottomText: "В избранное",
  },
];

export default movies;