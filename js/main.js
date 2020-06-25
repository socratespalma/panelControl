//---------- panel numero 8 ----------
const sliderAll = document.getElementById("sliderAll");
const sliderTL = document.getElementById("sliderTL");
const sliderTR = document.getElementById("sliderTR");
const sliderBL = document.getElementById("sliderBL");
const sliderBR = document.getElementById("sliderBR");
const root = document.documentElement;
let tl = 0,
  tr = 0,
  bl = 0,
  br = 0,
  setRadius = 0,
  resetZero = 0;

sliderAll.addEventListener("input", (e) => {
  tl = e.target.value;
  tr = e.target.value;
  bl = e.target.value;
  br = e.target.value;
  sliderTL.value = 0;
  sliderTR.value = 0;
  sliderBL.value = 0;
  sliderBR.value = 0;
  setRadius();
});

sliderTL.addEventListener("input", (e) => {
  resetZero();
  tl = e.target.value;
  setRadius();
});

sliderTR.addEventListener("input", (e) => {
  resetZero();
  tr = e.target.value;
  setRadius();
});

sliderBL.addEventListener("input", (e) => {
  resetZero();
  bl = e.target.value;
  setRadius();
});

sliderBR.addEventListener("input", (e) => {
  resetZero();
  br = e.target.value;
  setRadius();
});

setRadius = () => {
  let radius = `${tl}% ${tr}% ${bl}% ${br}%`;
  root.style.setProperty("--radius", radius);
};

resetZero = () => {
  if (sliderAll.value > 0) {
    sliderAll.value = 0;
    tl = 0;
    tr = 0;
    bl = 0;
    br = 0;
  }
};

//---------- Panel numero 7 ----------
const sliderR = document.getElementById("sliderR");
const sliderG = document.getElementById("sliderG");
const sliderB = document.getElementById("sliderB");
const sliderA = document.getElementById("sliderA");

let r = 255,
  g = 0,
  b = 0,
  a = 1,
  setColor = 0;

setColor = () => {
  let color = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  root.style.setProperty("--bgColor", color);
};

sliderR.addEventListener("input", (e) => {
  r = e.target.value;
  setColor();
});

sliderG.addEventListener("input", (e) => {
  g = e.target.value;
  setColor();
});

sliderB.addEventListener("input", (e) => {
  b = e.target.value;
  setColor();
});

sliderA.addEventListener("input", (e) => {
  a = e.target.value / 100;
  setColor();
});

//---------- Panel numero 6 ----------
const textHex = document.getElementById("textHex");

textHex.addEventListener("keypress", (e) => {
  if (e.key === "Enter" || e.which === 13) {
    root.style.setProperty("--bgColor", "#" + e.target.value);
  }
});

//---------- Panel numero 5 ----------
const btnAceptar = document.getElementById("btnAceptar");
const formasDropdown = document.getElementById("formasDropdown");
const objeto = document.querySelector("objeto");
let forma = 0,
  posInic = 0;

posInic = () => {
  root.style.setProperty("--rotationDeg", 0);
};

btnAceptar.addEventListener(
  "click",
  (forma = () => {
    let opciones = formasDropdown.value;
    if (opciones === "cuadrado") {
      let bordes = 0;
      root.style.setProperty("--radius", bordes + "px");
      posInic();
    } else if (opciones === "circulo") {
      let bordesC = 50;
      root.style.setProperty("--radius", bordesC + "%");
    } else {
      let angulo = 45;
      let bordesC2 = 0;
      root.style.setProperty("--rotationDeg", angulo + "deg");
      root.style.setProperty("--radius", bordesC2 + "%");
    }
  })
);

//---------- Panel numero 4 ----------
const sliderOp = document.getElementById("sliderOp");

sliderOp.addEventListener("input", (e) => {
  root.style.setProperty("--op", e.target.value / 100);
});

//---------- Panel numero 3 ----------
const sliderTam = document.getElementById("sliderTam");

sliderTam.addEventListener("input", (e) => {
  root.style.setProperty("--size", e.target.value / 100);
});

//---------- Panel numero 2 ----------
const sliderX = document.getElementById("sliderX");

sliderX.addEventListener("input", (e) => {
  root.style.setProperty("--posX", e.target.value + "px");
});

//---------- Panel numero 1 ----------
const sliderY = document.getElementById("sliderY");

sliderY.addEventListener("input", (e) => {
  root.style.setProperty("--posY", e.target.value + "px");
});
