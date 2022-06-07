const { Sequlize, DataTypes } = require("sequelize");

const sequlize = new Sequlize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_ENDPOINT,
    dialect: "mysql",
    pool: { max: 5, min: 0, idle: 10000 },
  }
);
sequlizes
  .authenticate()
  .then(() => {
    console.log("connect database is successfully");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const db = {};
db.Sequlize = Sequlize;
db.sequlize = sequlize;
db.sequlize = async()
  .then(() => {
    console.log("async");
  })
  .catch((err) => {
    console.log(err);
  });
db.post = require("./post")(sequlize, DataTypes);
