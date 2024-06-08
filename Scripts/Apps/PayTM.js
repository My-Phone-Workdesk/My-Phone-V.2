const myBillsButton = document.getElementById("MyBillsButton");
const popup = document.getElementById("popup");
const closeButton = document.querySelector(".close");

myBillsButton.addEventListener("click", function() {
  popup.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});
