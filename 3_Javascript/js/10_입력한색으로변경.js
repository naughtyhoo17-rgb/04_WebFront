// 내 풀이

/*
const boxes = document.querySelectorAll(".box");
const inputs = document.getElementsByClassName("color-input");

function colorInput() {
  for (let i = 0; i < inputs.length; i++) {
    boxes[i].style.backgroundColor = inputs[i].value;
  }
}

document.getElementById("changeButton").addEventListener("click", colorInput);
*/

// 쌤 풀이

// 배경색 적용할 div 배열
const boxList = document.querySelectorAll(".box");

// 배경색을 입력할 input 배열
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function() {

  for(let i = 0; i < boxList.length; i++) {
    boxList[i].style.backgroundColor = inputList[i].value;
  }

});