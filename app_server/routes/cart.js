const express = require("express");
const router = express.Router();
const cartController = require("../controllers/addtocart");

// Add to Cart
router.post("/add-to-cart", cartController.addToCart);

// View Cart
router.get("/cart", cartController.viewCart);

// Update Cart Item Quantity
// router.post("/cart/update/:id", cartController.updateCartItem);

// // Checkout
// router.post("/cart/checkout", cartController.checkout);

module.exports = router;
