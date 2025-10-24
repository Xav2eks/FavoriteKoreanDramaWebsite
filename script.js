const addBtn = document.getElementById("addBtn");
const inputTitle = document.getElementById("input-title");
const inputDescription = document.getElementById("input-description");
const inputImage = document.getElementById("input-image");
const leftContainer = document.querySelector(".left-container");
const cartTotal = document.querySelector(".total-items");
const cartList = document.querySelector(".cart-list");
const checkoutBtn = document.querySelector(".checkout-btn");
const clearCart = document.querySelector(".clear-btn");

let totalItems = 0;

addBtn.addEventListener("click", function () {
  const title = inputTitle.value;
  const description = inputDescription.value;
  const imageUrl = inputImage.value;

  const dramaCard = document.createElement("div");
  dramaCard.className = "drama-card";

  dramaCard.innerHTML = `
    <img src="${imageUrl}" alt="${title}">
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="btn-container">
        <button class="add-to-cart-btn">ADD TO CART</button>
        <button class="remove-btn">REMOVE</button>
    </div>
  `;

  leftContainer.appendChild(dramaCard);

  inputTitle.value = "";
  inputDescription.value = "";
  inputImage.value = "";

  const removeBtn = dramaCard.querySelector(".remove-btn");
  removeBtn.addEventListener("click", function () {
    dramaCard.remove();
  });

  const addToCartBtn = dramaCard.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener("click", function () {
    totalItems++;
    cartTotal.innerText = `Total Items: ${totalItems}`;
    const dramaCart = document.createElement("div");
    dramaCart.className = "drama-cart";

    dramaCart.innerHTML = `
      <h4>${title}</h4>
      <button class="delete-btn">DELETE</button>
    `;

    cartList.appendChild(dramaCart);

    const removeBtn = dramaCart.querySelector(".delete-btn");
    removeBtn.addEventListener("click", function () {
      dramaCart.remove();
      totalItems--;
      cartTotal.innerText = `Total Items: ${totalItems}`;
    });
  });
});

checkoutBtn.addEventListener("click", function () {
  if (totalItems != 0) {
    alert("Done Checkout! Check your folder to see your saved drama.");
  } else {
    alert("You have no items in your cart, please add to cart!");
  }
});

clearCart.addEventListener("click", function () {
  cartList.innerHTML = ``;
  totalItems = 0;
  cartTotal.innerText = `Total Items: ${totalItems}`;
});
