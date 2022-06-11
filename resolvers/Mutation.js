const { isInterfaceType } = require("graphql");

class PostPayloadType {
  userErros(error) {
    message = error;
    return message;
  }
}
const Mutation = {
  PostCreate: async (parent, { title, content }, { post }) => {
    if (!title || !content) {
      return {
        message: "you must provide content and title to create post",
        status: 201,
      };
    }
    const repo = await post.create({ title, content });
    // console.log(repo);
    return {
      message: "ok",
      status: 200,
    };
  },
  PostUpdate: async (parent, { input }, { post }) => {
    const { id, content, title } = input;
    if (!id && !content && title) {
      return {
        message: "you must provide id,content and title to update post",
        status: 201,
      };
    }

    // const resp2 = await post.findAll({ where: { id } });
    // console.log(resp2.length);
    // const rep = JSON.stringify(resp2);
    // var result = resp2.find((a) => {
    //   return a.content, a.title;
    // });
    // console.log(title.length);

    const resp = await post.update({ content, title }, { where: { id } });
    if (resp == 0) {
      return {
        message: "You must provide Valide Id",
        status: 201,
      };
    } else {
      return {
        message: "Your data is updated Successfully !",
        status: 200,
      };
    }
  },
  PostDelete: async (parent, { id }, { post }) => {
    const resp = await post.destroy({ where: { id } });
    console.log(resp);
    if (resp == 0) {
      return {
        message: "This post is not Exist",
        status: 201,
      };
    } else {
      return {
        message: "Post is deleted !",
        status: 200,
      };
    }
  },
};

module.exports = { Mutation };
