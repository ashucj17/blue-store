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
