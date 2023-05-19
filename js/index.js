const open = document.querySelectorAll(".anim-open");
const close = document.querySelectorAll(".anim-close");
const burger = document.querySelector(".burger-check");
const navList = document.querySelector(".nav__ul");
const body = document.querySelector(".body");

function openBurger() {
  open.forEach((element) => {
    element.beginElement();
  });
}

function closeBurger() {
  close.forEach((element) => {
    element.beginElement();
  });
}

burger.addEventListener("click", (event) => {
  navList.classList.toggle("nav__ul--active");
  body.classList.toggle("stop-scrolling");
  if (event.target.checked === true) {
    openBurger();
  } else {
    closeBurger();
  }
});

navList.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("nav__link") &&
    navList.classList.contains("nav__ul--active")
  ) {
    navList.classList.toggle("nav__ul--active");
    body.classList.toggle("stop-scrolling");
    closeBurger();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1146) {
    navList.classList.remove("nav__ul--active");
    body.classList.remove("stop-scrolling");
    closeBurger();
  }
});

const alertElem = document.querySelector(".alert");
const alertName = document.querySelector(".alert__name");
const alertMessage = document.querySelector(".alert__message");
const alertBtn = document.querySelector(".alert__btn");

function alert({ name, message }) {
  alertName.innerText = name;
  alertMessage.innerText = message;
  setTimeout(() => {
    alertElem.classList.add("alert--active");
  }, 2000);
}

alertBtn.addEventListener("click", () => {
  alertElem.classList.remove("alert--active");
});

alert({ name: "Stepa", message: "Hello" });
