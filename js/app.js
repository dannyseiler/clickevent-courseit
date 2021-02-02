const input = document.getElementById("username");

function addItem() {
  const taskValue = document.getElementById("username").value;
  addElementToDOM("li", taskValue, "list");
  document.getElementById("username").value = "";
}

function addElementToDOM(type, content, parentId) {
  const parent = document.getElementById(parentId);
  const elem = document.createElement(type);
  const text = document.createTextNode(content);

  elem.appendChild(text);
  parent.appendChild(elem);
}

function pressEnter(e) {
  if (e.key == "Enter") {
    console.log(e.target.value);
  }
}
