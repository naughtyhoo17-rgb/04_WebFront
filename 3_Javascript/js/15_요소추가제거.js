const add = document.querySelector("#add");

const calc = document.querySelector("#calc");

const container = document.querySelector('.container');
// div => 동적으로 만들어진 요소를 최종적으로 붙여야하는 대상

add.addEventListener("click", () => {

  const row = document.createElement("div");
  row.classList.add("row");

  const input = document.createElement("input");
  input.setAttribute("type", "number"); // input.type = "number";
  input.setAttribute("class", "input-number"); // input.classList.add("input-number");
      // setAttribute("Key", "Value"); Key 속성(attribute)에 Value값을 setting한다

  const span = document.createElement("span");
  span.classList.add("remove-row");
  span.innerHTML = "&times;";
  
  row.append(input, span);

  container.append(row);

  // X 버튼은 추가 버튼을 눌러야 생성되므로 같은 함수 내에 X 버튼 눌린 경우의 함수 추가
  
  // 클릭된 X 버튼의 부모 요소 제거 (input 창도 함께 제거하기 위해)
  // 1. 만들어진 X 버튼(span)에 eventListener/handler 추가
  span.addEventListener ("click", (e) => {
    
    // 2. 현재 이벤트가 발생한 요소(클릭된 X 버튼)의 부모 요소 탐색(선택)
  const parent = e.target.parentElement;

    // 3. 부모 요소 제거
  parent.remove();
  });
    
  
});

calc.addEventListener("click", () => {

  // 1. 모든 .input-number 요소 얻어오기
  const numbers = document.querySelectorAll(".input-number");

  // 2. for문으로 모든 요소 접근해 작성된 값(value)을 얻어와 숫자로 변경한 후 합계 저장 변수에 누적
  let sum = 0;

  for(let i=0; i < numbers.length; i++) {
    sum += Number(numbers[i].value);
  }

  // 3. alert() 결과 출력
  alert("결과 : " + sum);

});