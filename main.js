const API_URL = "https://fakestoreapi.com/products";
const canvas = document.getElementById("wrap");

const main = async () =>
  await fetch(API_URL)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
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

  col.setAttribute("class", "col-md-4 my-4");
  card.setAttribute("class", "card shadow-sm");
  image.setAttribute("src", j.image);
  cardBody.setAttribute("class", "card-body");
  productName.innerHTML = j.title;
  productName.setAttribute("class", "card-text text-success");
  price.innerText = `$${j.price}`;

  canvas.append(col);
  col.append(card);
  card.append(image);
  card.append(cardBody);
  cardBody.append(productName);
  cardBody.append(price);
  return `<div class="col-md-4 my-3">
            <div class="card shadow-sm">
                <img src="${j.image}" class="card-img-top" alt="${j.id}">
                <div class="card-body">
                    <h5 class="card-text text-success">${j.title}</h5>
                    <p>Rp.${j.price}</p>
                    <p>⭐${j.rating.rate} of ${j.rating.count}</p>
                    <button class="btn btn-success">Buy</button>
                </div>
              </div>
          </div>`;
};

main();
