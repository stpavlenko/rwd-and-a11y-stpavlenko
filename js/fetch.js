const url = "http://194.67.93.117:80";

// ---------------Alert-----------------

const alertElem = document.querySelector(".alert");
const alertName = document.querySelector(".alert__name");
const alertMessage = document.querySelector(".alert__message");
const alertBtn = document.querySelector(".alert__btn");

function alert({ name, message, type }) {
  switch (type) {
    case "error":
      alertElem.style.background = "crimson";
      break;
    default:
      alertElem.style.background = "green";
      break;
  }
  if (type === "error") {
    alertElem.style.background = "crimson";
  }
  alertName.innerText = name;
  alertMessage.innerText = message;
  alertElem.classList.add("alert--active");
}

alertBtn.addEventListener("click", () => {
  alertElem.classList.remove("alert--active");
});

// ---------------Gallery-----------------

const loader = document.querySelector(".loader");

async function getImages() {
  try {
    loader.style.display = "inline-block";
    const response = await fetch(url + "/images");
    if (response.ok) {
      let json = await response.json();
      addImages(json);
    } else {
      alert({
        name: "Ошибка HTTP:",
        message: response.status,
        type: "error",
      });
    }
  } catch (e) {
    alert({ name: "Ошибка", message: e, type: "error" });
  } finally {
    loader.style.display = "none";
  }
}

const grid = document.querySelector(".grid");
const notFound = document.querySelector(".gallery__not-found");

function addImages(images) {
  if (images.length <= 0) {
    notFound.innerText = "Изображения не найдены";
  }
  images.forEach((image) => {
    const figure = document.createElement("figure");
    figure.classList.add("col-3");

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;

    const figcaption = document.createElement("figcaption");
    figcaption.innerText = image.description;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    grid.append(figure);
  });
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  grid.innerHTML = "";
  notFound.innerHTML = "";
  getImages();
});

getImages();

// -------------------Form-----------------

const auditorium = document.querySelector("#auditorium");
const temperature = document.querySelector("#temperature");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  data = { class: auditorium.value, temp: Number(temperature.value) };
  try {
    submitBtn.disabled = true;

    const response = await fetch(url + "/temp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.status === "ok") {
      alert({ name: "Успешно", message: result.message });
      auditorium.value = "";
      temperature.value = "";
    } else {
      alert({ name: result.status, message: result.message, type: "error" });
    }
  } catch (e) {
    alert({ name: "Ошибка", message: e, type: "error" });
  } finally {
    submitBtn.disabled = false;
  }
});
