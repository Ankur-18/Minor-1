let list = document.querySelector("panel-body");
function createList() {
  var ul = document.createElement("ul");
  list.appendChild(ul);
  for (i = 0; i < 15; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.className = "list-group-item";
    let strong = document.createElement("strong");
    li.appendChild(strong);
    strong.innerHTML = "Song";
  }
}
const Startbtn = document.querySelector("#btnStart");
Startbtn.addEventListener("click", function () {
  createList();
});
