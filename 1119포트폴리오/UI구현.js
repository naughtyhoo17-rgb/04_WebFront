const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {

  const width = document.getElementById("width");
  const height = document.getElementById("height");
  const size = document.getElementById("fontSize");
  const weight = document.querySelector("input[id='fontWeight']:checked");
  const color = document.getElementById("color");
  const bgColor = document.getElementById("bgColor");
  const justiCon = document.querySelector("input[id='justiCon']:checked");
  const alignCon = document.querySelector("input[id='alignCon']:checked");
  const content = document.getElementById("content");
  
  
  const p = document.createElement("p");
  
  p.innerText = content.value;
  result.style.width = width.value + "px";
  result.style.height = height.value + "px";
  p.style.fontSize = size.value + "px";
  p.style.fontWeight = weight.value;
  p.style.color = color.value;
  result.style.backgroundColor = bgColor.value;
  
  result.style.justifyContent = justiCon.value;
  result.style.alignItems = alignCon.value;

  result.append(p);


});

