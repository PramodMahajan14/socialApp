module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.INTEGER,
      varch: 200,
    },
  });
};
