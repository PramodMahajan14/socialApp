const { ApolloServer, gql } = require("apollo-server");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const url = "locahost://5000";
const mysql = require("mysql");
const database = require("./models/index");

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
    database,
  },
});

server.listen().then(({ url }) => {
  console.log("server is running ", url);
});
