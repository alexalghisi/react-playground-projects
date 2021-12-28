const divList = document.querySelector(".listHolder");

const addButton = document.querySelector("#addBtn");
const addInput = document.querySelector("#addInput");

addButton.addEventListener("click", () => {
  const ul = divList.querySelector("ul");
  const li = document.createElement("li");
  ul.appendChild(li);
});
