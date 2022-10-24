
function getResult(event) {
  event.preventDefault();
const fav1 = document.getElementById("fav1").value;
const fav2 = document.getElementById("fav2").value;
const fav3 = document.getElementById("fav3").value;
console.log(fav1, fav2, fav3);
const newArray = [];
newArray.push(fav2, fav1, fav3);
console.log(newArray);

const ul = document.createElement("ul");
const liOne = document.createElement("li");
const liTwo = document.createElement("li");
const liThree = document.createElement("li");
liOne.append(newArray[0]);
liTwo.append(newArray[1]);
liThree.append(newArray[2]);

ul.append(liOne, liTwo, liThree);
document.body.append(ul);
};

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);
}); 