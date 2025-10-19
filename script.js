const addBtn = document.getElementById("addBtn");
const inputTitle = document.getElementById("input-title");
const inputDescription = document.getElementById("input-description");
const inputImage = document.getElementById("input-image");
const leftContainer = document.querySelector(".left-container");
const cartTotal = document.querySelector(".sidebar-cart p");

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
});
