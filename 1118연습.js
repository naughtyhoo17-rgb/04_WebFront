const inputWidth = document.getElementById("inputWidth");
const inputHeight = document.getElementById("inputHeight");
const content = document.getElementById("content");
const inputColor = document.getElementById("inputColor");
const align = document.getElementById("align");

const btn = document.getElementById("btn");

const result = document.querySelector("#result");

btn.addEventListener("click", () => {

  const div = document.createElement("div");
  div.style.width = inputWidth.value + "px";
  div.style.height = inputHeight.value + "px";
  div.innerText = content.value;
  div.style.color = inputColor.value;

  result.append(div);
  


});