// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// MongoClient.connect("mongodb+srv://anand:Ar2306@cluster0.cent8.mongodb.net/");

// async function connect() {
//   const client = new MongoClient(
//     "mongodb+srv://anand:Ar2306@cluster0.cent8.mongodb.net/"
//   );
//   database = client.db("menu");
// }
// let database;
// function getdb() {
//   if (!database) {
//     throw new Error("Database not connected");
//   }
//   return database;
// }
// module.exports = {
//   ConnectToDatabase: connect,
//   getdb: getdb,
// };
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anand:Ar2306@cluster0.cent8.mongodb.net/Resturant",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
