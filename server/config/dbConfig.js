const mongoose = require("mongoose");

const mongodb_url = "mongodb+srv://frazzeugin03:Franko%409965frazz@cluster0.j0nnp4e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongodb_url, {});
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection to MongoDB is successful");
});