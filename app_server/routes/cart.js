const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menu_items"); // Assuming you have a MenuItem model

router.get("/cart", (req, res)=>{res.render("cart", { title: "Cart" })})

// POST /api/cart
router.post("/add", async (req, res) => {
  const { itemId, quantity } = req.body;

  try {
    // Find the menu item in the database
    const item = await MenuItem.findById(itemId);
    if (!item) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }

    // Check if cart exists in session
    let cart = req.session.cart || [];

    // Check if the item is already in the cart
    const existingItem = cart.find(
      (cartItem) => cartItem.itemId.toString() === itemId
    );

    if (existingItem) {
      // Update quantity if the item already exists in the cart
      existingItem.quantity += parseInt(quantity);
    } else {
      // Add the new item to the cart
      cart.push({
        itemId: item._id,
        name: item.name,
        price: item.price,
        quantity: parseInt(quantity),
      });
    }

    // Save the updated cart in the session
    req.session.cart = cart;

    // Respond with success and the updated cart
    res.json({ success: true, cart });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
