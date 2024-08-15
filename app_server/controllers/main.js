const index = (req, res) => {
  res.render("index", { title: "Restaurant Home", page: "home" });
};

module.exports = {
  index,
};
