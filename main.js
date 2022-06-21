const API_URL = "https://fakestoreapi.com/products";
const catalog = document.querySelector(".catalog");

const main = async () =>
  await fetch(API_URL)
    .then((res) => res.json())
    .then((json) => {
      const headerText = document.createElement("h1");
      headerText.setAttribute("class", "headerText");
      headerText.innerHTML = "Catalog Product";

      let cards = "";
      catalog.append(headerText);
      json.forEach((data) => (cards += showProduct(data)));
    });

const showProduct = (data) => {
  // membuat card product
  const col = document.createElement("div");
  col.setAttribute("class", "col-md-4 my-2");

  const card = document.createElement("div");
  card.setAttribute("class", "card shadow-sm");

  const image = document.createElement("img");
  image.setAttribute("src", data.image);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  const productName = document.createElement("h6");
  const titleDisplayLimit = data.title.slice(0, 25) + "...";
  productName.setAttribute("class", "card-text text-success");
  productName.innerHTML = titleDisplayLimit;

  let price = document.createElement("p");
  price.setAttribute("class", "price");
  price.innerText = `$${data.price}`;

  const btn = document.createElement("button");
  btn.innerText = "Buy Now";
  btn.setAttribute("class", "btn  btn-success");

  catalog.append(col);
  col.append(card);
  card.append(image);
  card.append(cardBody);
  cardBody.append(productName);
  cardBody.appendChild(price);
  cardBody.append(btn);
  // akhir card product

  // membuat modal popup

  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("class", "modalContainer");

  const modal = document.createElement("div");
  modal.setAttribute("class", "modalBody");

  const titleProduct = document.createElement("p");
  titleProduct.setAttribute("class", "titleProduct");
  titleProduct.innerHTML = data.title;

  const closeButton = document.createElement("button");
  closeButton.setAttribute("class", "btn btn-danger");

  const description = document.createElement("p");
  description.setAttribute("class", "productDescription");
  description.innerHTML = data.description;
  const imagePopUp = document.createElement("img");
  imagePopUp.setAttribute("src", data.image);
  const rating = document.createElement("p");
  const modaldescription = document.createElement("div");

  // closeButton.innerHTML = "Close";
  const pricePopUp = document.createElement("p");

  pricePopUp.innerHTML = `$${data.price}`;
  pricePopUp.setAttribute("class", "price");
  rating.innerText = `⭐${data.rating.rate} of ${data.rating.count}`;

  catalog.appendChild(modalContainer);

  modalContainer.append(modal);
  modal.append(imagePopUp);
  modaldescription.append(titleProduct);
  modaldescription.append(description);

  // responsive description
  if (data.description.length > 450) {
    console.log("Data panjang");
    modal.style.flexDirection = "column";
    imagePopUp.style.width = "100%";
  }
  modaldescription.appendChild(pricePopUp);
  modaldescription.append(rating);
  // modal.append(closeButton);
  modal.append(modaldescription);

  col.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });

  closeButton.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });
  modalContainer.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });

  // akhir modal poopup
};

main();
