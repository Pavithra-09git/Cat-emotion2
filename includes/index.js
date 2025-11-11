// const emojis = ['🐥','🐯','🐼']

// console.log(emojis.includes("arun"))

const addItemBtn = document.getElementById("add-item-btn");
const itemInput = document.getElementById("item-input");
const list = document.getElementById("list");

const shoppingList = [];

addItemBtn.addEventListener("click", function () {
  // shoppingList.push(itemInput.value)
  // render()
  // itemInput.value = ''

  if (shoppingList.includes(itemInput.value)) {
    console.log("no duplicates allowed");
  } else {
    shoppingList.push(itemInput.value);
    render();
    console.log(shoppingList);
  }
  itemInput.value = "";
});

function render() {
  let html = "";
  for (let item of shoppingList) {
    html += `<li class="list-item">${item}</li>`;
  }
  list.innerHTML = html;
}

render();
