// Show alert when "Add to Cart" is clicked
document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.querySelector(".buy-button");
    addToCartBtn.addEventListener("click", function () {
      alert("Item added to cart!");
    });
  });
  