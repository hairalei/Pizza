console.log("hello pluto");

const btnOpenMenu = document.querySelector(".icon--open");
const btnCloseMenu = document.querySelector(".icon--close");
const btnMenu = document.querySelector(".menu");

btnOpenMenu.addEventListener("click", showMenu);
btnCloseMenu.addEventListener("click", hideMenu);

function showMenu() {
  const links = document.querySelector(".links");

  btnOpenMenu.style.visibility = "hidden";
  btnCloseMenu.style.visibility = "visible";
  links.style.transform = "translateX(0)";
}

function hideMenu() {
  const links = document.querySelector(".links");

  btnOpenMenu.style.visibility = "visible";
  btnCloseMenu.style.visibility = "hidden";
  links.style.transform = "translateX(100%)";
}
