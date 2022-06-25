const setBg = () => {
  const randomColor = Math.floor(Math.random() * 6728667).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
  console.log(randomColor);
};

genNewBtn.addEventListener("click", setBg);
setBg();
