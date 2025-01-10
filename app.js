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

// active form

let loginForm = document.getElementById("loginForm");
let regForm = document.getElementById("regForm");
let indicator = document.querySelector(".indicator");

function register() {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}
function login() {
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}
