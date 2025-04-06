const categoryList = document.getElementById("category-list");

function loadCategories() {
  fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json())
    .then((categories) => {
      categoryList.innerHTML = "";
      categories.forEach((cat) => {
        const div = document.createElement("div");
        div.className = "category";
        div.innerHTML = `
          <h3>${cat.name}</h3>
          <p>${cat.description}</p>
          <button onclick="deleteCategory(${cat.id})">Delete</button>`
        ;
        categoryList.appendChild(div);
      });
    });
}

function deleteCategory(id) {
  fetch(`https://northwind.vercel.app/api/categories/${id}`, {
    method: "DELETE",
  }).then(() => loadCategories());
}

function addCategory() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  fetch("https://northwind.vercel.app/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: title,
      description: description,
    }),
  }).then(() => {
    loadCategories();
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  });
}

window.onload=()=>[
  loadCategories()
]