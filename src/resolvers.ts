import Database from "./database.js";
import { CreateGame, Mutation } from "./types.js";

const resolvers = {
  Query: {
    reviews() {
      return Database.reviews;
    },
    review(_: any, args: { id: string }) {
      return Database.reviews.find((review) => review.id === args.id);
    },
    games() {
      return Database.games;
    },
    game(_: any, args: { id: string }) {
      return Database.games.find((game) => game.id === args.id);
    },
    authors() {
      return Database.authors;
    },
    author(_: any, args: { id: string }) {
      return Database.authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    reviews(parent: { id: string }) {
      return Database.reviews.filter((review) => review.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent: { id: string }) {
      return Database.reviews.filter(
        (review) => review.author_id === parent.id
      );
    },
  },
  Review: {
    author(parent: { author_id: string }) {
      return Database.authors.find((author) => author.id === parent.author_id);
    },
    game(parent: { game_id: string }) {
      return Database.games.find((game) => game.id === parent.game_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      Database.games = Database.games.filter((game) => game.id !== args.id);
      return Database.games;
    },
    createGame(_, args) {
      const newGame = {
        id: String(Database.games.length + 1),
        ...args.game,
      };
      Database.games.push(newGame);
      return newGame;
    },
    updateGame(_, args) {
      const game = Database.games.find((game) => game.id === args.id);
      if (!game) {
        throw new Error("Game not found");
      }
      Object.assign(game, args.updates);
      return game;
    },
  } as Mutation,
};

export default resolvers;
