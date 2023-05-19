function AnimationTarget(element, params) {
  this.element = element;
  this.params = params;
  this.animate = () => {
    anime({
      targets: this.element,
      ...this.params,
    });
    console.log(this);
  };
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.width = "150px";
  div.style.height = "150px";
  div.style.background = "crimson";
  document.body.append(div);

  let params = {
    translateX: anime.random(0, 1000) + "px",
    translateY: anime.random(0, 400) + "px",
    rotate: anime.random(-360, 360),
    scale: anime.random(0.5, 1.5),
    duration: 800,
  };

  let target = new AnimationTarget(div, params);
  target.animate();

  setTimeout(() => div.remove(), params.duration);
});
