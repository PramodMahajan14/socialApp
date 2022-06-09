const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    type: Sequelize.INTEGER,
  },
  email: {
    allowNull: false,
    unique: true,
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
});
module.exports = User;

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define("User", {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       unique: true,
//       type: DataTypes.INTEGER,
//     },
//     email: {
//       allowNull: false,
//       unique: true,
//       type: DataTypes.STRING,
//     },
//     name: {
//       type: DataTypes.STRING,
//     },
//     password: {
//       type: DataTypes.STRING,
//     },
//     createdAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//     },
//     updatedAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//     },
//   });
// };
