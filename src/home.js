import { showMenuPage } from "./menu";
import { removeActive } from ".";

export function showHomePage() {
  const body = document.querySelector(".overlay");

  const container = document.querySelector("#container");

  const markup = `
    <div class="content--home">
        <h1 class="headline">
          The best <strong>Pizza and Beer</strong> in town!
        </h1>
        <button class="btn--order">Order now!</button>
        <div class="details">
          <div class="schedule">
            <ion-icon class="icon--time" name="time-outline"></ion-icon>
            <p class="hours">Mon to Fri: 10:00am-8pm</p>
            <p class="hours">Sat to Sun: 10:00am-10pm</p>
          </div>
        </div>
      </div>
    `;

  container.innerHTML = markup;

  body.style.background = `url(/dist/img/home.jpg) no-repeat`;
  body.style.backgroundSize = `cover`;
  body.style.backgroundPosition = `center`;

  const menu = document.querySelector(".link--menu");

  const btnOrder = document.querySelector(".btn--order");
  btnOrder.addEventListener("click", () => {
    removeActive();
    menu.classList.add("active");
    showMenuPage();
  });
}
