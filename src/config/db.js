const { default: mongoose } = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.mongo_uri);
    console.log("connected to db");
  } catch (error) {
    console.log("error from the database api", error);
  }
};

module.exports = connectdb;
