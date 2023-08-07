// Glue B/w View and Model
// Controller UI I/O

import readAllProducts from "../Services/product-operations.js";

async function showProducts() {
  const products = await readAllProducts();
  console.log("News are: ", products);
  products.map((product) => createCard(product));
}


function createCard(product) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card m-1";
  cardContainer.style.width = "27rem";

  const cardImage = document.createElement("img");
  cardImage.className = "card-img-top";
  cardImage.src = product.url;
  cardImage.alt = product.title;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = product.title;
  
  const cardDesc = document.createElement("a");
  cardDesc.className="card-text";
  cardDesc.textContent=product.desc;
  cardDesc.href=product.curl;

  const cardDate = document.createElement("p");
  cardDate.className="text-body-secondary";
  cardDate.textContent=product.date;

  const cardAuthor = document .createElement("p");
  cardAuthor.className="text-body-secondary";
  cardAuthor.textContent=product.author;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDate);
  cardBody.appendChild(cardDesc);
  cardBody.appendChild(cardAuthor);
  



  cardContainer.appendChild(cardImage);
  cardContainer.appendChild(cardBody);

  const cardContainerElement = document.getElementById("card-container");
  cardContainerElement.appendChild(cardContainer);
}


const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchProducts);

function searchProducts() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const cardContainerElement = document.getElementById("card-container");
  cardContainerElement.innerHTML = "";

  readAllProducts().then((products) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput)
    );

    if (filteredProducts.length === 0) {
      cardContainerElement.innerHTML = `
        <div class="text-center">
          <h2>None found</h2>
        </div>`;
    } else {
      filteredProducts.forEach((product) => createCard(product));
    }
  });
}

showProducts();
