const inputContent = document.querySelector("#inputContent");

const inputSize = document.querySelector("#inputSize");
const inputColor = document.querySelector("#inputColor");

const content = document.querySelector("#inputContent");
const div = document.querySelector(".contentResult");

document.querySelector("#btn1").addEventListener("click", () => {

  inputContent.style.color = inputColor.value; 
  inputContent.style.fontSize = inputSize.value + "px"; 

  document.querySelector("#btn2").addEventListener("click", () => {

    const inputContent = document.createElement("div");
    inputContent.innerHTML = content.value;
    inputContent.style.color = inputColor.value; 
    inputContent.style.fontSize = inputSize.value + "px"; 

    div.append(inputContent);
    body.append(div);

    

  });

});