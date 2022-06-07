const { Sequelize, DataTypes } = require("sequelize");
const async = require("async");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_ENDPOINT,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    flags: "-FOUND_ROWS",
    logging: false,
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("connect database is successfully");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.post = require("./post")(sequelize, DataTypes);
db.sequelize
  .sync()
  .then(() => {
    console.log("async");
  })
  .catch((err) => {
    console.log(err);
  });
