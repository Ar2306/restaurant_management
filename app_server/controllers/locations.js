const MenuItem = require("../models/menu_items");

const menu = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.render("menu", { title: "Our Menu", menuItems, page: "menu" });
  } catch (error) {
    console.log("Error fetching menu items:", error);
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

module.exports = {
  menu,
  home,
  blog,
  about,
  contact,
};
