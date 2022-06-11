const Query = {
  posts: async (parent, args, { post }) => {
    const resp = await post.findAll({ orderBy: [{ createAt: "desc" }] });
    return resp;
  },
};

module.exports = { Query };
