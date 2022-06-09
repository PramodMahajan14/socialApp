const { isInterfaceType } = require("graphql");

class PostPayloadType {
  userErros(error) {
    message = error;
    return message;
  }
}
const Mutation = {
  PostCreate: (parent, { title, content }, { database }) => {
    database.post.create({ title, content });
    return;
  },
};

module.exports = { Mutation };
