let items = ["item1", "item2", "item3", "item5"];

let list = document.querySelector("#myList");

items.forEach(function (item) {
  let li = document.createElement("li");
  let t = document.createTextNode(item);
  console.log(t);
  li.className = "list-group-item";
  li.appendChild(t);
  list.appendChild(li);

  let span = document.createElement("span");
  let text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  span.onclick = function (e) {
    let li = this.parentElement;
    li.style.display = "none";
    li.classList.remove("checked");
  };
});

//? span onclick uzun yol //
// let close = document.getElementsByClassName("close");

// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     let li = this.parentElement;
//     li.style.display = "none";
//   };
// }

list.addEventListener("click", (item) => {
  if (item.target.tagName == "LI") {
    item.target.classList.toggle("checked");
    ToggleDeleteButton();
  }
});
document.querySelector("#deleteAll").onclick = function () {
  let elements = document.querySelector(".checked");
  elements.forEach((v) => {
    v.style.display = "none";
  });
};

function ToggleDeleteButton() {
  let checkList = document.querySelectorAll(".list-group-item.checked"); //or .checked
  if (checkList.length > 0) {
    document.querySelector("#deleteAll").classList.remove("d-none");
  } else {
    document.querySelector("#deleteAll").classList.add("d-none");
  }
}

document.querySelector("#btnCreate").onclick = function () {
  let item = document.querySelector("txtItem").value;
  if (item === "") {
    alert("Lütfen bir değer giriniz");
    return;
  }
};
