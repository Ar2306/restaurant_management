const menu = (req, res) => {
  const menuItems = [
    {
      name: "Pizza",
      description: "Delicious cheese pizza",
      price: 9.99,
      image: "pizza.jpg",
    },
    {
      name: "Burger",
      description: "Juicy chicken burger",
      price: 8.99,
      image: "burger.jpg",
    },
    {
      name: "Salad",
      description: "Fresh vegetable salad",
      price: 7.99,
      image: "salad.jpg",
    },
  ];

  res.render("menu", { title: "Our Menu", menuItems, page: "menu" });
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
