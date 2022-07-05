// HEX

function hexBg() {
  const randomColor = Math.floor(Math.random() * 6728667).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "HEX:" + " #" + randomColor;
  console.log(randomColor);
}

genNewBtn.addEventListener("click", hexBg);
hexBg();

// RGB

/*
function rgbBg() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor =
    "rgb" + "(" + r + "," + g + "," + b + ")";
  color.innerHTML = "RGB: " + r + ", " + g + ", " + b;
  console.log(r, ",", g, ",", b);
}

/*
genNewBtn.addEventListener("click", rgbBg);
rgbBg();
*/
