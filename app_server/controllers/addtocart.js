const Cart = require("../models/cart");
const MenuItem = require("../models/menu_items");

// Add item to cart
exports.addToCart = async (req, res) => {
  const { itemId, quantity = 1 } = req.body;

  try {
    // Fetch the item from the database to ensure it exists
    const menuItem = await MenuItem.findById(itemId);
    if (!menuItem) {
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });
    }

    // Initialize cart if it doesn't exist
    if (!req.session.cart) {
      req.session.cart = [];
    }

    // Check if the item already exists in the cart
    const itemIndex = req.session.cart.findIndex(
      (item) => item.itemId.toString() === itemId
    );

    if (itemIndex > -1) {
      // If the item exists, update its quantity
      req.session.cart[itemIndex].quantity += quantity;
    } else {
      // Add new item to the cart
      req.session.cart.push({
        itemId: menuItem._id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: quantity,
      });
    }

    // Send updated cart data back as a JSON response
    res.status(200).json({ success: true, cart: req.session.cart });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Display cart items
exports.viewCart = (req, res) => {
  const cart = req.session.cart || [];
  if (cart.length === 0) {
    console.log("Cart is empty or missing.");
  }
  res.render("cart", { cart });
};
