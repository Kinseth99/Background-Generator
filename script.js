var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var colorRandom1 = "#";
  var colorRandom2 = "#";

  for (var i = 0; i < 6; i++) {
    colorRandom1 += letters[Math.floor(Math.random() * 16)];
    colorRandom2 += letters[Math.floor(Math.random() * 16)];

    body.style.background =
      "linear-gradient(to right, " + colorRandom1 + ", " + colorRandom2 + ")";

    document.querySelector(".color1").value = colorRandom1;
    document.querySelector(".color2").value = colorRandom2;
    css.textContent = body.style.background + ";";
  }
  return colorRandom1;
  return colorRandom2;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandomColor);
