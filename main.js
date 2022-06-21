const API_URL = "https://fakestoreapi.com/products";
const canvas = document.getElementById("wrap");

const main = async () =>
  await fetch(API_URL)
    .then((res) => res.json())
    .then((json) => {
      let cards = "";
      json.forEach((el) => (cards += showProduct(el)));
    });

const showProduct = (j) => {
  const col = document.createElement("div");
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardBody = document.createElement("div");
  const productName = document.createElement("h6");
  const price = document.createElement("p");
  const btn = document.createElement("button");

  col.setAttribute("class", "col-md-4 my-4");
  card.setAttribute("class", "card shadow-sm");
  image.setAttribute("src", j.image);
  cardBody.setAttribute("class", "card-body");

  const titleDisplayLimit = j.title.slice(0, 25) + "...";

  productName.innerHTML = titleDisplayLimit;
  productName.setAttribute("class", "card-text text-success");
  price.innerText = `$${j.price}`;
  btn.innerText = "Buy";
  btn.setAttribute("class", "btn  btn-success");

  canvas.append(col);
  col.append(card);
  card.append(image);
  card.append(cardBody);
  cardBody.append(productName);
  cardBody.append(price);
  cardBody.append(btn);

  // membuat modal popup

  const modalContainer = document.createElement("div");
  const modal = document.createElement("div");
  const text = document.createElement("p");
  const titleProduct = document.createElement("h5");
  const closeButton = document.createElement("button");
  const description = document.createElement("p");
  const imagePopUp = document.createElement("img");
  const pricePopUp = document.createElement("h6");
  const rating = document.createElement("p");

  modalContainer.setAttribute("class", "modalContainer");
  modal.setAttribute("class", "modalBody");
  closeButton.setAttribute("class", "btn btn-danger");
  imagePopUp.setAttribute("src", j.image);
  titleProduct.innerHTML = j.title;
  text.innerHTML = j.title;
  closeButton.innerText = "Close";
  pricePopUp.innerText = `$${j.price}`;
  description.innerHTML = j.description;
  rating.innerText = `⭐${j.rating.rate} of ${j.rating.count}`;

  canvas.appendChild(modalContainer);
  modalContainer.append(modal);
  modal.append(imagePopUp);
  modal.append(titleProduct);
  modal.append(description);
  modal.append(pricePopUp);
  modal.append(rating);
  modal.append(closeButton);

  col.addEventListener("click", () => {
    modalContainer.classList.add("show");
  });

  closeButton.addEventListener("click", () => {
    modalContainer.classList.remove("show");
  });
};

main();
