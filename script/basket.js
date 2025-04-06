const basketDiv = document.getElementById("basket-items");
const basket = JSON.parse(localStorage.getItem("basket")) || [];

basket.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <div class="basket-info">
    <h3>${product.title}</h3>
    <p>$${product.price}</p>
    <button class="delete-btn" data-index="${index}">Delete</button>
  `;
  basketDiv.appendChild(card);

  const deleteBtn = card.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function() {
    basket.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(basket));
    basketDiv.removeChild(card);
  });
});
