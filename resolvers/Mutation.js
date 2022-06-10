const { isInterfaceType } = require("graphql");

class PostPayloadType {
  userErros(error) {
    message = error;
    return message;
  }
}
const Mutation = {
  PostCreate: async (parent, { title, content }, { post }) => {
    const repo = await post.create({ title, content });
    console.log(repo);
    return "sucess";
  },
};

module.exports = { Mutation };
