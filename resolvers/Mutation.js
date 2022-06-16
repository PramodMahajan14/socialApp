const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const Profile = require("../models/profile");

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
  SignUp: async (parent, { input }, { User, profile }) => {
    const { email, name, bio, password } = input;
    if (!email || !name || !bio || !password) {
      return {
        message: "All filed require !",
        status: 201,
      };
    }
    //regex for valid email
    const emailRegexp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegexp.test(email)) {
      return {
        message: "This Email InValid",
        status: 201,
      };
    }
    const userExist = await User.findOne({ where: { email } });
    // console.log(userExist);
    if (userExist) {
      return {
        message: "This Email Already Exist",
        status: 201,
      };
    }
    if (password.length <= 6) {
      return {
        message: "Password must be 6 character",
        status: 201,
      };
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const respose = await User.create({ name, email, password: passwordHash });

    // console.log(respose.id);
    const response2 = await profile.create({ bio, userId: respose.id });
    console.log(response2);
    return {
      message: "sucess",
      status: 200,
    };
  },
};

module.exports = { Mutation };
