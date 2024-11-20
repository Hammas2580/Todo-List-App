
var getUl = document.getElementById("ul");

function foo() {
    
  var value1 = document.getElementById("input");
  var li = document.createElement("li");
  var liText = document.createTextNode(value1.value);
  li.appendChild(liText);
  getUl.appendChild(li);
  //   Create delete button in html
  value1.value = "";
  var deleteBtn = document.createElement("Button");
  var deleteValue = document.createTextNode("Delete");
  deleteBtn.appendChild(deleteValue);
  li.appendChild(deleteBtn);
  deleteBtn.setAttribute("onclick", "del(this)");
  //    crate edit button in html
  var editBtn = document.createElement("Button");
  var editValue = document.createTextNode("Edit");
  editBtn.appendChild(editValue);
  li.appendChild(editBtn);
  editBtn.setAttribute("onclick", "editfunc(this)");
}
// edit button
function editfunc(e) {
  var a = prompt("Enter Edit Value", e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue = a;
}
//  delte button

function del(e) {
  e.parentNode.remove();
}
// all  delete button

function deleteall() {
  getUl.innerHTML = "";
}
