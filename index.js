const express = require("express");

const { ApolloServer, gql } = require("apollo-server-express");
// const { ApolloServer, gql } = require("apollo-server");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const PORT = 4000 || env.process.PORT;
const mysql = require("mysql");
const database = require("./models/index");
const post = require("./models/post");
const profile = require("./models/profile");
const User = require("./models/User");
const app = express();
const http = require("http");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    post,
    User,
    profile,
  },
});
// server start using express
server.start().then((res) => {
  server.applyMiddleware({ app, path: "/api/v11" });
  app.listen({ port: PORT }, () =>
    console.log("Now browse to http://localhost:4000" + server.graphqlPath)
  );
});

// server start using apollo

// const server = new ApolloServer({
//   typeDefs,
//   resolvers: {
//     Query,
//     Mutation,
//   },
//   context: {
//     post,
//     User,
//     profile,
//   },
// });
// server.listen().then(({ url }) => {
//   console.log("server is running ", url);
// });
