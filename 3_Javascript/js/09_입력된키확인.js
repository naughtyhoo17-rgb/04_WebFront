// 키보드를 누르고 있을 때 : keydown
// 키보드를 떼었을 때 : keyup

// toUpperCase() : 소문자 -> 대문자
// toLowerCase() : 대문자 -> 소문자


/*

 ** 내 풀이 **

const keys = document.getElementsByClassName("key");

document.addEventListener("keydown", function (e) {

  if (e.key.toUpperCase() == "Q") {

    keys[0].style.backgroundColor = "#95E1D3";

  }

  if (e.key.toUpperCase() == "W") {

    keys[1].style.backgroundColor = "#95E1D3";

  }

  if (e.key.toUpperCase() == "E") {

    keys[2].style.backgroundColor = "#95E1D3";

  }

  if (e.key.toUpperCase() == "R") {

    keys[3].style.backgroundColor = "#95E1D3";

  }

});

document.addEventListener("keyup", function (e) {

  if (e.key.toUpperCase() == 'Q') {

    keys[0].style.backgroundColor = "white";

  }

  if (e.key.toUpperCase() == 'W') {

    keys[1].style.backgroundColor = "white";

  }

  if (e.key.toUpperCase() == 'E') {

    keys[2].style.backgroundColor = "white";

  }

  if (e.key.toUpperCase() == 'R') {

    keys[3].style.backgroundColor = "white";

  }

});

*/

// 쌤 풀이

/* 풀이 1.

const keys = document.getElementsByClassName("key");

// 화면에서 키가 눌러지는 걸 감지했을 때
document.addEventListener("keydown", function (e) {

  let idx; // 인덱스 값을 저장할 변수

  // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
  switch(e.key.toLowerCase()) {
    case 'q' : idx = 0; break;
    case 'w' : idx = 1; break;
    case 'e' : idx = 2; break;
    case 'r' : idx = 3; break;
    default : return; // 함수 종료
  }

  // idx 번호와 일치하는 keys 배열의 요소 배경색을 변경
  keys[idx].style.backgroundColor = "#AAC4FF";

});

document.addEventListener("keyup", function (e) {

  let idx; // 인덱스 값을 저장할 변수

  // 입력된 키를 소문자로 바꿔서 일치하는 case 실행
  switch(e.key.toLowerCase()) {
    case 'q' : idx = 0; break;
    case 'w' : idx = 1; break;
    case 'e' : idx = 2; break;
    case 'r' : idx = 3; break;
    default : return; // 함수 종료
  }

  // idx 번호와 일치하는 keys 배열의 요소 배경색을 변경
  keys[idx].style.backgroundColor = "white";

});


*/

// 풀이 2.
// 화면에 존재하는 key 모두 얻어오기
const keys = document.getElementsByClassName("key");
const keyMap = { 'q': 0, 'w': 1, 'e': 2, 'r': 3 }; // JS 객체

// 키보드 이벤트 핸들러 함수
// JS Object
// 객체명[key] => 매핑된 value
// 객체명.key => 매핑된 value
function changeKeyColor(e, color) {
  const idx = keyMap[e.key.toLowerCase()];
  // keyMap['q'] => 0
  // keyMap['w'] => 1
  // keyMap['e'] => 2
  // keyMap['r'] => 3

  // keyMap에 없는 값이 입력되면 idx는 undefined
  if (idx != undefined) {
    
    keys[idx].style.backgroundColor = color;

  }
}

// 키가 눌러졌을 때 / 떼어졌을 때
document.addEventListener("keydown", (e) => changeKeyColor(e, "#AAC4FF"));
document.addEventListener("keyup", (e) => changeKeyColor(e, "white"));

// 이벤트가 감지되었을 때 실행해야하는 함수(ex. changeKeyColor) 
// 만약 해당 함수에 전달할 인자가 없는 경우 
// -> 함수명만 써도 됨 ("keydown", changeKeyColor) 
// -> changeKeyColor 함수 선언부의 매개변수에서 이벤트 객체 (e)를 
//    가져다 쓸 수 있음

// 만약 해당 함수에 전달할 인자가 있는 경우
// -> 익명함수 형태로 작성할 것 (e) => {}
// -> 전달인자의 1번째 값은 e를 넘겨주기, 2번째 전달인자부터 내가 전달하고싶은
// 데이터 나열...
// -> ("keydown", (e) => changeKeyColor(e, "deepPink")) 


/* 풀이 3
const keys = document.querySelectorAll(".key");
const keyMap = { q: 0, w: 1, e: 2, r: 3 };

document.addEventListener("keydown", handleKey);
document.addEventListener("keyup", handleKey);

function handleKey(e) {
  const idx = keyMap[e.key.toLowerCase()];
  if (idx === undefined) return;

  // event.type이 'keydown'일 때만 색 변경, 아닐 땐 white로 복귀
  keys[idx].style.backgroundColor = e.type === "keydown" ? "deeppink" : "white";
}
*/