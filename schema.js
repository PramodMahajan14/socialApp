const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String!
  }
  type Mutation {
    PostCreate(title: String!, content: String!): String!
  }
  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
    createdAt: String!
    user: User!
  }
  type User {
    id: ID!
    email: String!
    name: String!
    password: String!
    profile: Profile!
    post: [Post!]!
  }
  type Profile {
    id: ID!
    bio: String!
    user: User!
  }
  # type UserError {
  #   message: String!
  # }
  # type postPayload {
  #   userError: [UserError!]!
  #   post: Post
  # }

  type Response {
    # status: Int!
    message: String!
  }
`;
