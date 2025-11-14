// window.setTimeout()

document.getElementById("btn1").addEventListener("click", () => {

  window.setTimeout(function() { alert("3초 후 출력!"); }, 3000);

});

// window.setInterval()

// 현재 시간을 문자열로 반환하는 함수
function currentTime() {

  const now = new Date();

  let hour = now.getHours(); // 시
  let min = now.getMinutes(); // 분
  let sec = now.getSeconds(); // 초
  // 1의 자리만 나올 때 1, 2 이런 식으로 나오니 01, 02로 표현되게끔 가공해야

  if(hour < 10) hour = "0" + hour;
  if(min < 10) min = "0" + min;
  if(sec < 10) sec = "0" + sec;

  return hour + " : " + min + " : " + sec;
  // 또는 `${hour} : ${min} : ${sec}`;

}

let interval; // setInterval 함수를 저장하기 위한 변수

function clockFn() {

  const clock = document.getElementById("clock");
  clock.innerText = currentTime();

  interval = setInterval(function() { clock.innerText = currentTime(); }, 1000);

}

clockFn();

document.getElementById("stop").addEventListener("click", () => {

  window.clearInterval(interval);

});