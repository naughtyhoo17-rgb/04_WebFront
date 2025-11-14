// 정규 표현식 객체 생성 + 확인
document.querySelector("#btn1").addEventListener("click", () => {

  // 정규 표현식 객체 생성
  
  const regExp1 = new RegExp("script");
  // "script"와 일치하는 문자열이 있는지 검사하는 목적의 정규 표현식

  const regExp2 = /java/;
  // "java"와 일치하는 문자열이 있는지 검사하는 목적의 정규 표현식

  // 확인하기
  const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
  const str2 = "jsp(java server page)도 곧 할겁니다.";
  const str3 = "java, java, java";

  console.log( regExp1.test(str1) );
  console.log( regExp1.test(str1) );

  console.log( regExp2.test(str2) );
  console.log( regExp2.test(str2) );

  console.log( regExp2.test(str3) );
  console.log( regExp2.exec(str3) );

});


// 메타문자 확인하기
document.querySelector("#btn2").addEventListener("click", () => {

  // [abcd]
  const regExp1 = /[abcd]/;
  console.log( regExp1.test("apple") ); // true
  console.log( regExp1.test("ssbss") ); // true
  console.log( regExp1.test("qwerty") ); // false

  // ^(캐럿)
  const regExp2 = /^group/; // 문자열의 시작이 'group'인지 확인
  console.log( regExp2.test("group100") ); // true
  console.log( regExp2.test("100group") ); // false

  // $(달러)
  const regExp3 = /group$/; // 문자열의 끝이 'group'인지 확인
  console.log( regExp3.test("group100") ); // false
  console.log( regExp3.test("100group") ); // true

});

// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", (e) => {
  
  // 결과 출력용 span 요소 얻어오기
  const span = document.getElementById("inputNameResult");

  // 한글 2~5 글자 정규 표현식 객체 만들기
  const regExp = /^[ㄱ-힣]{2,5}$/;

  // 빈 칸인지 검사
  if(e.target.value.length == 0) {
    span.innerText = "";
    return;
  }

  // 유효성 검사
  if(regExp.test(e.target.value)) { // 한글 2~5글자 유효한 값 작성한 경우

    span.innerText = "유효한 이름 형식입니다.";
    span.style.color = "green";
    span.style.fontWeight = "bold";
  
  } else { // 유효하지 않은 값 작성한 경우
    
    span.innerText = "유효하지 않은 이름 형식입니다.";
    span.style.color = "red";
    span.style.fontWeight = "bold";
  }

});


// 주민등록번호 유효성 검사
document.getElementById("inputPno").addEventListener("keyup", (e) => {

  const span = document.getElementById("inputPnoResult");

  const regExp = /^\d{6}-\d{7}$/;

  if(e.target.value.length == 0) {
    span.innerText = "주민등록번호 입력";
    span.classList.remove("confirm", "error");
    return;
  }

  if(regExp.test(e.target.value)) {

    span.innerText = "유효한 형식입니다.";
    span.classList.add("confirm"); //스타일 태그에 있는 클래스 추가하는 방식
    span.classList.remove("error"); // 유효하지 않다가 유효하게 되는 경우 대비
    /*
    span.classList.toggle("confirm", true);
    span.classList.toggle("error", false);
    이렇게 toggle 사용도 가능!
    */
    span.style.fontWeight = "bold";



  } else {

    span.innerText = "유효하지 않은 형식입니다.";
    span.classList.add("error");
    span.classList.remove("confirm"); // 유효하다가 아니게 된 경우 대비
    span.style.fontWeight = "bold";
  }

});