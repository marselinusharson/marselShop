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
  const rating = document.createElement("p");
  const btn = document.createElement("button");

  col.setAttribute("class", "col-md-4 my-4");
  card.setAttribute("class", "card shadow-sm");
  image.setAttribute("src", j.image);
  cardBody.setAttribute("class", "card-body");
  productName.innerHTML = j.title;
  productName.setAttribute("class", "card-text text-success");
  price.innerText = `$${j.price}`;
  rating.innerText = `⭐${j.rating.rate} of ${j.rating.count}`;
  btn.innerText = "Buy";
  btn.setAttribute("class", "btn  btn-success");

  canvas.append(col);
  col.append(card);
  card.append(image);
  card.append(cardBody);
  cardBody.append(productName);
  cardBody.append(price);
  cardBody.append(rating);
  cardBody.append(btn);
};

main();
