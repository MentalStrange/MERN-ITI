function createDiv() {
  let labelContent = prompt("Add your New Task");

  if (labelContent === null || labelContent.trim() === "") {
    return;
  }

  let parentDiv = document.createElement("div");
  parentDiv.className = "new-task";

  let newCheckBox = document.createElement("input");
  newCheckBox.setAttribute("type", "checkbox");
  newCheckBox.setAttribute("id", "checkbox");
  newCheckBox.className = "newTask";

  let newLabel = document.createElement("label");
  newLabel.textContent = labelContent;
  newLabel.setAttribute("for", "checkbox");
  newLabel.className = "newLabel";

  parentDiv.appendChild(document.createElement("br"));
  document.querySelector(".tasks-to-do").appendChild(parentDiv);
  parentDiv.appendChild(newCheckBox);
  parentDiv.appendChild(newLabel);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    document.querySelector(".tasks-to-do").removeChild(parentDiv);
  };
  parentDiv.appendChild(deleteButton);

  // ---------------------------------------------------------
  newCheckBox.addEventListener("click", function () {
    if (newCheckBox.checked) {
      // document.querySelector(".tasks-to-do").removeChild(parentDiv);
      document.querySelector(".finished-tasks").appendChild(parentDiv);
      parentDiv.removeChild(deleteButton);
    }
  });
  console.log(parentDiv.children);
}

// console.log(document.querySelector(".tasks-to-do").children);
