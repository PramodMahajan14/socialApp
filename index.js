const express = require("express");

const { ApolloServer, gql } = require("apollo-server-express");
// const { ApolloServer, gql } = require("apollo-server");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const port = 4000;
const mysql = require("mysql");
const database = require("./models/index");
const post = require("./models/post");
const profile = require("./models/profile");
const User = require("./models/User");
const app = express();
const http = require("http");
// const con = mysql.createConnection({
//   host: process.env.DATABASE_ENDPOINT,
//   port: process.env.DATABASE_PORT,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
// });

// con.connect((err) => {
//   if (err) throw err;
//   console.log("connection successfully");
// });

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

server.start().then((res) => {
  server.applyMiddleware({ app, path: "/api/v1" });
  app.listen({ port: 4000 }, () =>
    console.log("Now browse to http://localhost:4000" + server.graphqlPath)
  );
});
// server.start();
// server.applyMiddleware({ app, path: "/api" });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000`)
// );

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
