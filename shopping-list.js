const addItemButton = document.getElementById("addItemButton");
const itemInput = document.getElementById("itemInput");
let index = 0;

addItemButton.addEventListener("click", addItem);

// Function to prevent 'form' from clearing as a default

function addItem(e) {
  e.preventDefault();

  // Function to add the new item to our list:

  const list = document.getElementById("list");
  let textInput = document.getElementById("itemInput").value;
  if (textInput.length > 0) {
    let newItem = document.createElement("li");
    newItem.innerHTML = `                        <label class="label" id="itemLabel-${index}">
      <input type="checkbox" class="checkbox"/>
      <span class="item">${textInput}</span>
      <span class="cross">×</span>
  </label>`;
    list.appendChild(newItem);

    document.getElementById("itemInput").value = "";

    document
      .getElementById(`itemLabel-${index}`)
      .addEventListener("click", function (e) {
        const target = e.target;
        // console.log(e.target.classList)
        if (target.classList.contains("cross")) {
          newItem.remove();
        }
        if (target.classList.contains("checkbox")) {
          if (target.checked == true) {
            console.log("we just checked the box");
          } else {
            console.log("we just unchecked the box");
          }
        }
      });
    index++;
  }
}