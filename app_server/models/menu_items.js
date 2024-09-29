const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Review Schema
const reviewSchema = new Schema({
  user: { type: String, required: true }, // Name of the reviewer
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating between 1-5 stars
  comment: { type: String }, // Optional comment
  date: { type: Date, default: Date.now }, // Date of the review
});

// Menu Item Schema
const menuItemSchema = new Schema(
  {
    name: { type: String, required: true }, // Name of the menu item
    description: { type: String, required: true }, // Description of the menu item
    price: { type: Number, required: true }, // Price in Indian Rupees (Rs)
    image: { type: String, required: true }, // Image filename (stored in /images folder)
    category: {
      type: String,
      enum: ["Breakfast", "Main Menu", "Dessert", "Beverage"], // Valid categories
      required: true, // Category is mandatory
    },
    reviews: [reviewSchema], // Array of reviews (user, rating, comment, date)
  },
  { collection: "menu" }
);

const MenuItem = mongoose.model("MenuItem", menuItemSchema);
module.exports = MenuItem;
