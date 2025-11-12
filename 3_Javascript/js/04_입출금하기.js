// prompt 사용연습

function test() {
  const password = prompt("비밀번호를 입력하세요");

  console.log(password);
  // 확인 => 입력한 값이 문자열로 저장
  // 취소 => null

  if (password == null) {
    // 취소

    alert("취소");
  } else {
    // 확인

    if (password == "1234") {
      // 비밀번호 맞을 때
      alert("비밀번호 일치");
    } else {
      // 비밀번호 틀렸을 때
      alert("비밀번호 불일치");
    }
  }
}

//test();

// -----------------------------------------------------

let balance = 10000;
const password = "1234";

const input = document.getElementById("amount");
const result = document.getElementById("output");
result.innerText = balance;

function deposit() {
  const value1 = input.value;
  if (value1.length == 0) {
    alert("금액을 입력하세요");
  }
  balance += Number(value1);
  console.log(balance);
  result.innerText = balance;
  input.value = "";
  alert("입금 완료. 잔액 : " + Number(balance) + "원");
}

function withdrawal() {
  if (input.value.length == 0) {
    alert("금액을 입력하세요.");
  }
  const pw = prompt("비밀번호를 입력하세요");
  if (pw == null) {
    alert("취소되었습니다.");
  } else {
    if (pw == password) {
      const value2 = input.value;

      if (Number(value2) > balance) {
        alert("잔액이 부족합니다.");
      } else {
        balance -= Number(value2);
        console.log(balance);
        result.innerText = balance;
        input.value = "";
        alert(`${Number(value2)}원 출금 완료. 잔액 : ${balance}원`);
        /* 탬플릿 리터럴(Template Literal)
            : 백틱(`)을 사용하여 문자열을 감싸고,
            ${} 안에 변수나 값을 넣어 동적으로 문자열 생성 */
      }
    } else {
      alert("비밀번호 불일치");
    }
  }
}
