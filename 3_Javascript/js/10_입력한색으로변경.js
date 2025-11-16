// 유진 풀이

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

/* 두 배열의 요소 갯수와 순서가 같으니 index 번호 공유 가능! */

document.querySelector("#changeButton").addEventListener("click", function() {

  for(let i = 0; i < boxList.length; i++) {
    boxList[i].style.backgroundColor = inputList[i].value;
    /* boxList[0].style.backgroundColor = inputList[0].value;
       boxList[1].style.backgroundColor = inputList[1].value;
       boxList[2].style.backgroundColor = inputList[2].value;
       boxList[3].style.backgroundColor = inputList[3].value;
       boxList[4].style.backgroundColor = inputList[4].value; */
  }

});