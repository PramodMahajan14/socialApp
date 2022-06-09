const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Profile = sequelize.define("profile", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    type: Sequelize.INTEGER,
  },
  bio: {
    allowNull: false,
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
module.exports = Profile;

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define("Profile", {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       unique: true,
//       type: DataTypes.INTEGER,
//     },
//     bio: {
//       allowNull: false,
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
