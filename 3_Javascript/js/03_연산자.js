//console.log('js file loaded');

// document : HTML 문서 내에서
// get : 얻어온다
// Element : HTML 요소를
// ById : 아이디로(일치하는 아이디의)
const number1 = document.getElementById("input1");

console.log(number1);

const number2 = document.getElementById("input2");

console.log(number2);

const result = document.getElementById("calcResult");

// 두 수를 더해 화면에 출력하는 함수
function plusFn() {
  //input요소.value : input 요소에 작성된 값 얻어오기
  const value1 = number1.value;
  const value2 = number2.value;

  console.log(value1, value2);

  console.log(value1 + value2);
  /* => input 요소에 작성된 값은 무조건 문자열(string) 형태라서
    더했을 때 산술 연산이 아닌 이어쓰기 되는 문제 발생 */

  /* [해결 방법]
    문자열을 숫자로 변경하는 코드 수행
    숫자만 작성된 문자열("123")을 진짜 숫자 타입으로 변경하는 방법
      => Number("123") --> 123 */
  console.log(Number(value1) + Number(value2));

  // 두 수의 합을 result 변수(span 태그)에 내부글자(innerText, HTML 요소의 content)로 대입
  result.innerText = Number(value1) + Number(value2);
}

function minusFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  console.log(Number(value1) - Number(value2));
  result.innerText = Number(value1) - Number(value2);
}

function multiFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  console.log(Number(value1) * Number(value2));
  result.innerText = Number(value1) * Number(value2);
}

function divFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  console.log(Number(value1) / Number(value2));
  result.innerText = Number(value1) / Number(value2);
}

function modFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  console.log(Number(value1) % Number(value2));
  result.innerText = Number(value1) % Number(value2);
}