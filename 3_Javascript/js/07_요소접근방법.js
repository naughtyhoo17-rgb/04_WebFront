// 클래스로 요소 접근 테스트
function classTest() {

  /* 유사배열
    : 배열처럼 index, length를 가지고 있으나 배열 전용 기능(함수)를 제공하지 않음
   => 제공하지 않는 기능 : pop(), push(), map(), filter() ...
   ex) HTMLCollection, NodeList */

  // class 속성값이 cls-test인 요소 모두 얻어오기
  const divs = document.getElementsByClassName("cls-test");

  console.log(divs);

  divs[0].style.backgroundColor = "rgb(114,203,80)";
  divs[1].style.backgroundColor = "blue";
  divs[2].style.backgroundColor = "pink";
}

// 태그명으로 요소 접근 테스트
function tagNameTest() {
  const tagList = document.getElementsByTagName("li");

  console.log(tagList);

  for(let i = 0; i < tagList.length; i++) {
   tagList[i].style.backgroundColor = tagList[i].innerText;
  }
}

// name으로 요소 접근 테스트
function nameTest() {
  const hobbyList = document.getElementsByName("hobby");

  console.log(hobbyList);

  let str = ""; // check된 input 요소의 value값을 누적할 문자열
  let count = 0; // check된 개수 카운트

  // input요소.checked => 체크 되었다면 true, 아니면 false
  for(let i = 0; i < hobbyList.length; i++) {
    if(hobbyList[i].checked) {
      str += hobbyList[i].value + " ";
      count++;
    }
  }

  // id가 name-div 요소에 내용으로 결과 출력
  document.getElementById("name-div").innerHTML = `${str} <br><br>선택된 취미 개수 : ${count}`;

  /* 요소.innerHTML : HTML 태그를 포함해 작성한 문자열을 실제 HTML 요소로 해석하여 화면에 렌더링
     요소.innerText : 텍스트 내용만 요소 내부에 출력(HTML 코드로 해석x) */
}

function cssTest() {
  // target-div 속성값이 css-div인 요소 얻어오기
  const container = document.querySelector("[target-div='css-div']");
  container.style.border = "10px solid red";

  // 첫 번째 자식 div 접근해 내용을 "css 선택자로 선택하여 값 변경됨" 적용
  const div1 = document.querySelector("[target-div='css-div'] > div");
  div1.innerText = "CSS 선택자로 선택하여 값 변경됨.";

  const div2 = document.querySelector("[target-div='css-div'] > div:last-child");
  div2.innerText = "첫 번째 요소가 아니면 querySeletor() 특징 활용 불가";

  // 모든 자식 div 한번에 선택 (배열)
  const divList = document.querySelectorAll("[target-div='css-div'] > div");

  divList[0].style.fontFamily = "궁서";
  divList[1].style.fontSize = "20px";

  for(let i = 0; i < divList.length; i++) {
    divList[i].onclick = function() {
      alert(`${i} 번째 요소입니다.`);
    }
  }

}


// 카카오톡 채팅 만들기
function readValue() {

  // 채팅이 출력되는 배경 요소
  const bg = document.querySelector("#chatting-bg");

  // 채팅 내용 입력 input 요소
  let input = document.getElementById("user-input");

  /* 입력된 값이 없을 경우 => 전송 X
    1) 진짜 안적은 경우
    2) 공백만 적은 경우 */

  // 문자열.trim() : 문자열 좌우 공백 제거
  if(input.value.trim().length == 0) {
    alert("채팅 내용을 입력해주세요!");
    input.value = ""; // 이전 input에 작성된 값 삭제
    input.focus(); // input 창에 커서 활성화
    return;
  } 

  // 공백을 제외한 어떠한 값을 입력한 경우
  bg.innerHTML += (`<p><span>${input.value}</span></p>`); // 재대입 아닌 누적이므로 +=

  /* bg.scrollTop: 현재 스크롤 위치
    스크롤이 현재 얼마만큼 내려와있는지 나타냄 (숫자) => 0이면 맨 위에 있는 것 */
  console.log(bg.scrollTop);

  /* bg.scrollHeight: bg의 스크롤 전체 높이
    스크롤바를 올리고 내리고 할 수 있는 전체 높이 (숫자) */
  console.log(bg.scrollHeight);
  
  bg.scrollTop = bg.scrollHeight; // 스크롤이 마지막 메세지를 따라가게 됨

  input.value = "";
  input.focus();

}

/* keydown : 키가 눌러졌을 때 (키보드를 꾹 누르고 있으면 계속 인식됨)
   keyup : 눌려지던 키가 떼어졌을 때(키보드 버튼이 올라왔을 때 한 번 인식) */
document.getElementById("user-input").addEventListener("keyup" , function(e) {
  // 매개변수 e : 이벤트 객체 (발생한 이벤트의 모든 정보를 담고있는 객체)

  console.log(e);

  // e['key'] / e.key => 매핑된 value
  if(e.key == "Enter") { // 엔터키가 눌려지고 떼어졌을 경우

    readValue();

  }

});