const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    posts: [Post!]!
  }
  type Mutation {
    SignUp(input: createUser!): resp!
    SignIn(input: loginUser): LoginAuth!
    PostCreate(title: String!, content: String!): resp!
    PostUpdate(input: updatePost): resp!
    PostDelete(id: Int!): resp!
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
  #   message: String
  # }
  # type postPayload {
  #   userError: [UserError!]
  #   post: Post
  # }
  type resp {
    status: Int!
    message: String!
  }
  type response {
    resp: resp
  }
  type LoginAuth {
    token: String!
    isVerified: Boolean!
    status: Int
  }
  input updatePost {
    id: ID!
    title: String!
    content: String!
  }
  input createUser {
    email: String!
    name: String!
    password: String!
    bio: String!
  }
  input loginUser {
    email: String!
    password: String!
  }
`;
