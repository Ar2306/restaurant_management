const MenuItem = require("../models/menu_items");

// Location Controllers
const menu = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    const menuCategories = [
      {
        name: "Breakfast",
        items: menuItems.filter((item) => item.category === "Breakfast"),
      },
      {
        name: "Main Menu",
        items: menuItems.filter((item) => item.category === "Main Menu"),
      },
      {
        name: "Dessert",
        items: menuItems.filter((item) => item.category === "Dessert"),
      },
      {
        name: "Beverage",
        items: menuItems.filter((item) => item.category === "Beverage"),
      },
    ];
    res.render("menu", { title: "Our Menu", menuCategories, page: "menu" });
  } catch (error) {
    res.render("error", { message: "Could not load menu items" });
  }
};

const home = (req, res) => {
  res.render("home", { title: "Restaurant Home", page: "home" });
};

const blog = (req, res) => {
  res.render("blog", { title: "Blog", page: "blog" });
};

const about = (req, res) => {
  res.render("about", { title: "About", page: "about" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Contact", page: "contact" });
};

// Authentication Controllers (formerly in authController.js)
const getSignIn = (req, res) => {
  res.render("signin", { title: "Sign In", page: "signin" });
};

const postSignIn = (req, res) => {
  const { email, password } = req.body;
  // Your authentication logic here
  res.send("Sign In successful");
};

const getSignUp = (req, res) => {
  res.render("signup", { title: "Sign Up", page: "signup" });
};

const postSignUp = (req, res) => {
  const { email, password } = req.body;
  // Your sign-up logic here
  res.send("Account created successfully");
};

// Exporting all controllers
module.exports = {
  menu,
  home,
  blog,
  about,
  contact,
  getSignIn,
  postSignIn,
  getSignUp,
  postSignUp,
};
