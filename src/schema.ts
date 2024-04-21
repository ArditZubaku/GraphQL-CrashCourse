const typeDefs = `#graphql
  type Game {
   id: ID!
   title: String!
   platform: [String!]!
   reviews: [Review!]
  }

  type Review {
    id: ID!,
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }
  
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    deleteGame(id: ID!): [Game]
    createGame(game: CreateGame!): Game
    updateGame(id: ID!, updates: EditGame!): Game
  }

  input CreateGame {
    title: String!,
    platform: [String!]!
  }

  input EditGame {
    title: String,
    platform: [String!]
  }
`;
// Int, Float, String, Boolean, ID
// Query type is a must

export default typeDefs;
