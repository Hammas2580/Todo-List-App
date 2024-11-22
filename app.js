var getUi = document.getElementById("ul");
var todo = document.getElementById("input");

function foo() {
  if (!todo.value.trim()) {
    alert("Please enter a valid value!");
    return;
  }
  var text = document.createElement("li");
  var li = document.createTextNode(todo.value);
  text.appendChild(li);
  getUi.appendChild(text);
  todo.value = "";
  //   delte btn
  var delteBtn = document.createElement("button");
  var delteValue = document.createTextNode("Remove");
  delteBtn.appendChild(delteValue);
  text.appendChild(delteBtn);
  delteBtn.setAttribute("onclick", "delte(this)");
  delteBtn.setAttribute("class", "del");
  //  edit btn
  var editBtnBtn = document.createElement("button");
  var editValue = document.createTextNode("Update");
  editBtnBtn.appendChild(editValue);
  text.appendChild(editBtnBtn);
  editBtnBtn.setAttribute("onclick", "edit(this)");
  editBtnBtn.setAttribute("class", "add");
}

function edit(e) {
  var edit = prompt("Updte your Todo", e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue = edit;
  todo.value = "";
}
//  delete btn
function delte(remove) {
  remove.parentNode.remove();
}

function deleteall() {
  getUi.innerHTML = "";
}
