const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String,
    category: {
      type: String,
      enum: ["Breakfast", "Main Menu", "Dessert", "Beverage"],
      required: true,
    },
  },
  { collection: "menu" }
); // Specify the collection name here

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
