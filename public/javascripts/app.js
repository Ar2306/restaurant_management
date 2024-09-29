//--------menu page javascript
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuNav = document.querySelector(".menu-nav");

  hamburger.addEventListener("click", () => {
    menuNav.style.display =
      menuNav.style.display === "none" || menuNav.style.display === ""
        ? "block"
        : "none";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const cart = []; // Initialize the cart as an empty array

  // Add event listeners to all "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.getAttribute("data-id");
      addToCart(itemId);
    });
  });

  function addToCart(itemId) {
    // Add logic to add the item to the cart
    // For simplicity, just pushing the ID to the cart array
    cart.push(itemId);
    alert(`Item with ID ${itemId} added to cart!`);
    console.log(cart); // For demonstration purposes
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const categoryBoxes = document.querySelectorAll(".category-box");
  const menuSections = document.querySelectorAll(".menu-container .row");

  categoryBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterMenuByCategory(category);
      activateCategoryBox(this);
    });
  });

  function filterMenuByCategory(category) {
    menuSections.forEach((section) => {
      const categoryTitle = section.previousElementSibling;
      if (category === "all" || categoryTitle.id === category) {
        section.style.display = "flex";
        categoryTitle.style.display = "block";
      } else {
        section.style.display = "none";
        categoryTitle.style.display = "none";
      }
    });
  }

  function activateCategoryBox(activeBox) {
    categoryBoxes.forEach((box) => {
      box.classList.remove("active");
    });
    activeBox.classList.add("active");
  }

  activateCategoryBox(categoryBoxes[0]);
  filterMenuByCategory(categoryBoxes[0].getAttribute("data-category"));
});
//-----------------book table page javascript
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData);
//     console.log(data);
//   });
// });
