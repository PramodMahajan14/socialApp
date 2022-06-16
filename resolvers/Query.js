const Query = {
  posts: async (parent, args, { post }) => {
    const resp = await post.findAll({ orderBy: [{ createAt: "desc" }] });
    return resp;
  },
  user: async (parent, args, { User }) => {
    const response = await User.findAll();
    return response;
  },
};

module.exports = { Query };
