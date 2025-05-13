const textInput = document.getElementById("text_input");
const addButton = document.getElementById("add_input");
const container = document.querySelector(".container");

addButton.addEventListener("click", addList);
textInput.addEventListener("keypress", keyPress);
container.addEventListener("click", deleteList);

function addList() {
  const currentTime = () => {
    const date = new Date();
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };

  if (textInput.value) {
    const newList = document.createElement("li");

    newList.className = "list";
    newList.innerHTML = `
        <div class="content">
            <p class="date">${currentTime()}</p>
            <p class="text">${textInput.value}</p>
        </div>
        <div class="control-btns">
            <button class="delete">Delete</button>
        </div>
      `;

    textInput.value = ""; // Cleaning process
    container.appendChild(newList);
  }
}

function keyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addButton.click();
  }
}

function deleteList(event) {
  if (event.target.classList.contains("delete")) {
    event.target.closest("li").remove();
  }
}
