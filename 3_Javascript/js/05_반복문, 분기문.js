// 메뉴 주문
function check1() {

  // 메뉴 가격
  const gimbap = 3000;
  const ramyun = 3500;
  const donkatsu = 5000;

  // 주문 개수 카운트
  let gCount = 0;
  let rCount = 0;
  let dCount= 0;

  // prompt에 입력한 값을 저장할 변수 선언
  let input; // => undefined 형태
  
  /* 비교 연산자
    == 값이 동일한 경우
    === 동일 비교 연산자 : 값 & 자료형 모두 동일한 경우 
   thus, undefined ==  null => true
         undefined === null => false (undefined형, object형) */
  while(input !== null){
    // 취소 버튼을 누른 경우에 멈춤(미입력 != 취소)

    input = prompt("메뉴 번호 입력!");

    switch(input) {
      case "1" : gCount++; break;
      case "2" : rCount++; break;
      case "3" : dCount++; break;
      case null : alert("주문 완료!"); break;
      default : alert("메뉴에 있는 번호만 입력하세요.");
    }

  }
  alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
  let sum = (gCount * gimbap) + (rCount * ramyun) + (dCount * donkatsu);
  alert(`총 주문 금액 : ${sum}원`);
}

// Up & Down 게임
function startGame() {
  // 맞혀야 하는 난수 발생시켜 변수에 저장
  const answer = Math.floor(Math.random() * 200) + 1;

  // 정답 시도 횟수를 세기위한 변수 선언
  let count = 0;

  // prompt에 출력할 문자열
  let str ="1부터 200사이 숫자 입력";

  while(true) {

    let input = prompt(str);

    if(input === null) { // 취소 클릭한 경우
      alert("게임 포기");
      break;
    }

    // 숫자 입력 후 확인 클릭한 경우
    const value = Number(input); // 입력한 값 숫자로 변환

    /* NaN (Not a Number : 숫자가 아니다) => 숫자가 아닌 문자열이 오입력된 경우
      isNan(값) : 값이 NaN이면 true */

    if( isNaN(value) ) { // 숫자가 아닌 타입을 입력한 경우
      alert("이게 숫자야?!?!");
      continue;
    }  

    if(value < 1 || value > 200) { // 입력한 숫자가 범위를 벗어난 경우
      alert("잘 좀 읽고 입력하세요....");
      continue;
    }

    // 정답을 맞히려는 시도를 했기 때문에 count 1 증가시켜야
    count++;

    // 정답인 경우
    if(value === answer) {
      alert(`정답입니다!! (${answer}) / 시도 횟수 : ${count}`);
      break;
    }

    // 정답이 아닌 경우
    if(value < answer) { // 작은 경우
      str = `${value} [up] / 시도 횟수 : ${count}`;
    } else { // 큰 경우
      str = `${value} [down] / 시도 횟수 : ${count}`;      
    }


  }
}