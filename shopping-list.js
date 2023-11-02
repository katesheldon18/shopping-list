const addItemButton = document.getElementById("addItemButton");

addItemButton.addEventListener("click", addItem);

function addItem() {
  const list = document.getElementById("list");
  let textInput = document.getElementById("itemInput").value;
  if (textInput.length > 0) {
    let newItem = document.createElement("li");
    newItem.classList.add("listItem");
    newItem.innerText = textInput;
    list.appendChild(newItem);
    document.getElementById("itemInput").value = "";
  }
}