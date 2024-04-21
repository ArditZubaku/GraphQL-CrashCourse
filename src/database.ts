import { Game, Review, Author, ReviewGA } from "./types.js";

const games: Game[] = [
  {
    id: "1",
    title: "Game 1",
    platform: ["PC", "Xbox One"],
  },
  {
    id: "2",
    title: "Game 2",
    platform: ["PlayStation 4", "Nintendo Switch"],
  },
  {
    id: "3",
    title: "Game 3",
    platform: ["PC"],
  },
];

const authors: Author[] = [
  {
    id: "1",
    name: "John Doe",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    verified: false,
  },
  {
    id: "3",
    name: "Alex Johnson",
    verified: true,
  },
];

const reviews: ReviewGA[] = [
  {
    id: "1",
    rating: 4,
    content: "Great game!",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 3,
    content: "Decent game.",
    author_id: "2",
    game_id: "2",
  },
  {
    id: "3",
    rating: 5,
    content: "Amazing game!",
    author_id: "3",
    game_id: "3",
  },
];

export default { games, reviews, authors };
