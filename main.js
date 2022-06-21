const API_URL = "https://fakestoreapi.com/products";
const canvas = document.querySelector(".row");

const main = async () =>
  await fetch(API_URL)
    .then((res) => res.json())
    .then((json) => {
      let cards = "";
      json.forEach((el) => (cards += showProduct(el)));
    });

const showProduct = (data) => {
  // membuat card product
  const col = document.createElement("div");
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardBody = document.createElement("div");
  const productName = document.createElement("h6");
  const price = document.createElement("p");
  const btn = document.createElement("button");

  col.setAttribute("class", "col-md-4 my-2");
  card.setAttribute("class", "card shadow-sm");
  image.setAttribute("src", data.image);
  cardBody.setAttribute("class", "card-body");

  const titleDisplayLimit = data.title.slice(0, 25) + "...";

  productName.innerHTML = titleDisplayLimit;
  productName.setAttribute("class", "card-text text-success");
  price.innerText = `$${data.price}`;
  btn.innerText = "Buy Now";
  btn.setAttribute("class", "btn  btn-success");

  canvas.append(col);
  col.append(card);
  card.append(image);
  card.append(cardBody);
  cardBody.append(productName);
  cardBody.append(price);
  cardBody.append(btn);
  // akhir card product

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
  titleProduct.setAttribute("class", "text-success");
  imagePopUp.setAttribute("src", data.image);

  titleProduct.innerHTML = data.title;
  text.innerHTML = data.title;
  closeButton.innerText = "Close";
  pricePopUp.innerText = `$${data.price}`;
  description.innerHTML = `<p><strong>Description:</p></strong>${data.description}`;
  rating.innerText = `⭐${data.rating.rate} of ${data.rating.count}`;

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

  // akhir modal poopup
};

main();
