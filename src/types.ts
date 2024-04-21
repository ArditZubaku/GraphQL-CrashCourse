interface Game {
  id: string;
  title: string;
  platform: string[];
}

interface Review {
  id: string;
  rating: number;
  content: string;
}

interface ReviewGA extends Review {
  game_id: string;
  author_id: string;
}

interface Author {
  id: string;
  name: string;
  verified: boolean;
}

interface Query {
  reviews: Review[];
  games: Game[];
  authors: Author[];
}

interface CreateGame {
  title: string;
  platform: string[];
}

interface EditGame extends CreateGame {}

interface Mutation {
  deleteGame(_: any, args: { id: string }): Game[];
  createGame(_: any, args: { game: CreateGame }): Game;
  updateGame(_: any, args: { id: string; updates: EditGame }): Game;
}

export {
  Game,
  Review,
  ReviewGA,
  Author,
  Query,
  CreateGame,
  EditGame,
  Mutation,
};
