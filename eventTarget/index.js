const container = document.getElementById("container");
const clearBtn = document.getElementById("clear-btn");

const products = [
  {
    name: "Ostrich Pillow",
    price: "10",
    image: "ostrichpillow.jpg",
    id: "ostrich-pillow",
  },
  {
    name: "Bacon Bandages",
    price: "8",
    image: "bacon-bandage.jpg",
    id: "bacon-bandages",
  },
  {
    name: "Baby Mop",
    price: "20",
    image: "babymop.jpg",
    id: "baby-mop",
  },
];

let productsHtml = ``;

for (let product of products) {
  productsHtml += `
    <div class="product on-offer">
        <h3>${product.name}</h3>
         <h4> £${product.price}</h4>
        <img src="${product.image}">
        <button id="${product.id}">Buy Now</button>
    </div>
    `;
}
container.innerHTML += productsHtml;

container.addEventListener("click", function (event) {
  //   console.log(event.target);
  //    console.log(event.target.id);
  // console.log(document.getElementById(event.target.id).parentElement);
  if (document.getElementById(event.target.id)) {
    document
      .getElementById("pTag")
      .parentElement.classList.add("purchase");
    document
      .getElementById(event.target.id)
      .parentElement.classList.remove("on-offer");
  }
});

clearBtn.addEventListener("click", function () {
  const productsArr = document.getElementsByClassName("product");
  for (let product of productsArr) {
    // console.log(product);
    product.classList.add("on-offer");
    product.classList.remove("purchase");
  }
});
