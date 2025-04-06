let allProducts = [];
const productList = document.getElementById("product-list");

function addToCart(productId) {
  const product = allProducts.find((item) => item.id === productId);
  if (!product) return;
  let cart = JSON.parse(localStorage.getItem("basket")) || [];
  cart.push(product);
  localStorage.setItem("basket", JSON.stringify(cart));
  alert("Product added to basket!");
}

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    allProducts = products; 
    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <div class="product-info">
        <h3>${product.title}</h3>
        <div class="stars">★★★★☆</div>
        <p>$${product.price}</p>
        <button class="buy-btn" onclick="addToCart(${product.id})">BUY NOW</button>
      `;
      productList.appendChild(card);
    });
  });

