const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  published: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  date: Sequelize.DATE,
  authorId: {
    type: Sequelize.INTEGER,
  },
});
module.exports = Post;

// module.exports = (sequelize, DataTypes) => {
//   const post = sequelize.define("posts", {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     content: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     published: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//     date: DataTypes.DATE,
//     authorId: {
//       type: DataTypes.INTEGER,
//     },
//   });
//   return post;
// };

//********** * One To many * **********
// db.products.hasMany(db.reviews,{
//   foreignKey:"product_id",
//   as:"review"
// })
// create product_id in review table

// db.reviews.belongsTo(db.products,{
// foreignKey:"products_id",
// as:"products"
// })

// const getProductReriews = async(req,res)={
//   const data = await Product.findAll({
//     include:[{
//       model:"review",
//       as:"review"
//     }],
//     where:{id:2}
//   })
// }
