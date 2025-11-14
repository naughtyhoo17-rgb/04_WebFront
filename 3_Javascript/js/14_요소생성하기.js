const createBox = document.querySelector("#createBox"); // 첫 번째 button

const container = document.querySelector('.container'); // 바깥 쪽 부모 div

createBox.addEventListener("click", () => {

  // 1. div 요소 생성
  const box = document.createElement("div"); // <div></div>
  console.log(box);
  
  // 2. 만들어진 div요소에 "box" class 추가
  box.classList.add("box"); // <div class="box"></div>
  console.log(box);

  // 3. input 요소 생성 + 속성 부여
  const input = document.createElement("input");
  input.type = "text"; // K:V 꼴로 속성 삽입 => <input type="text">

  // 4. 생성된 input을 box의 마지막 자식으로 추가
  box.append(input);
    /* <div class="box">
        <input type="text">
       </div> */

  // 5. 만들어진 div 요소를 container의 마지막 자식으로 추가
  container.append(box);

});

console.log(container.classList);

/*
  요소.classList : 요소의 클래스 목록(배열) 반환
  => 클래스 존재 여부 확인, 추가/제거 등 가능

  요소.classList.contains("클래스명") : 클래스가 있으면 true, 없으면 false 반환

  요소.classList.add("클래스명") : 클래스 추가

  요소.classList.remove("클래스명") : 클래스 제거
*/   


// innerHTML로 요소 추가하기
const innerHTMLBox = document.querySelector("#innerHTMLBox"); // button

innerHTMLBox.addEventListener("click", () => {

  container.innerHTML += "<div class='box'><input type='text'></div>";
});