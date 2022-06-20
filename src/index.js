import { showHomePage } from "./home";
import { showMenuPage } from "./menu";
import { showContactPage } from "./contact";

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
const contact = document.querySelector(".link--contact");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    removeActive();
    this.classList.add("active");

    if (
      link.classList.contains("active") &&
      link.classList.contains("link--home")
    )
      showHomePage();
    else if (
      link.classList.contains("active") &&
      link.classList.contains("link--menu")
    )
      showMenuPage();
    else if (
      link.classList.contains("active") &&
      link.classList.contains("link--contact")
    )
      showContactPage();
  });
});

export function removeActive() {
  links.forEach((link) => link.classList.remove("active"));
}

showHomePage();

console.log("sdafadf");
