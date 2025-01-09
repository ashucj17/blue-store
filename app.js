let menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight == "0px";
function menuToggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
    console.log("clicked");
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

// product image

let productImg = document.querySelector("#productImg");
let smallImg = document.querySelectorAll(".small-img");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    productImg.src = smallImg[i].src;
  };
}
