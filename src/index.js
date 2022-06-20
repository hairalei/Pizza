import { showHomePage } from "./home";

//--------Open and Close Nav-------\\
const btnOpenMenu = document.querySelector(".icon--open");
const btnCloseMenu = document.querySelector(".icon--close");

function showMenu() {
  const menu = document.querySelector(".links");

  btnOpenMenu.style.visibility = "hidden";
  btnCloseMenu.style.visibility = "visible";
  menu.style.transform = "translateX(0)";
}

function hideMenu() {
  const menu = document.querySelector(".links");

  btnOpenMenu.style.visibility = "visible";
  btnCloseMenu.style.visibility = "hidden";
  menu.style.transform = "translateX(100%)";
}

btnOpenMenu.addEventListener("click", showMenu);
btnCloseMenu.addEventListener("click", hideMenu);

//--------Show pages-------\\
const links = document.querySelectorAll(".link");
const home = document.querySelector(".link--home");
const menu = document.querySelector(".link--menu");
const contact = document.querySelector(".link--contact");

links.forEach((link) => {
  console.log(link);
  if (
    link.classList.contains("active") &&
    link.classList.contains("link--home")
  )
    showHomePage();
});
