const addItemButton = document.getElementById("addItemButton");
const itemInput = document.getElementById("itemInput");

addItemButton.addEventListener("click", addItem);

// Function to prevent 'form' from clearing as a default

function addItem(e) {
  e.preventDefault();


// Function to add the new item to our list:

  const list = document.getElementById("list");
  let textInput = document.getElementById("itemInput").value;
  if (textInput.length > 0) {
    let newItem = document.createElement("li");
    newItem.innerHTML =
      `                        <label class="label">
      <input type="checkbox" class="checkbox"/>
      <span class="item">${textInput}</span>
      <span class="cross">×</span>
  </label>`;
    list.appendChild(newItem);
    document.getElementById("itemInput").value = "";
  }
}

// Function to remove an item when 'X' is clicked:

const cross = document.getElementById("cross")
cross.addEventListener("click", deleteItem)

function deleteItem() {
  document.removeElement("newItem")
}


// Function to change the item class if the checkbox is checked vs unchecked:

const checkBox = document.getElementById("checkbox")
if (checkBox.checked == true){
  text.style.display = "block";
} else {
  text.style.display = "none";
}