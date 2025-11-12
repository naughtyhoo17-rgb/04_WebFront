// 배열 선언 및 기초 사용법
function check1() {

  // 배열 선언 방법 확인
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ["사과", "바나나", "딸기"];

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);
  
  // 배열의 길이 : 배열명.length
  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);
  
  // 배열의 index에 접근 : 배열명[index] => 해당 인덱스에 저장된 데이터 반환
  console.log(arr4[0]);
  console.log(arr4[1]);
  console.log(arr4[2]);

  // 배열에 값 삽입 : 배열명[index] = 값;
  arr2[0] = 100;
  arr2[1] = "식사 하셨어요??";
  arr2[2] = true;

  console.log(arr2);
  // JS 배열 특징 : index 별로 자료형을 다르게 저장 가능!

  // 길이 제한 없으므로 값을 원하는만큼 추가 가능!
  arr1[0] ="가"; 
  arr1[1] ="나"; 
  arr1[2] ="다"; 

  console.log(arr1);
  
  arr1[4] = '마'; // 원하는 index에 값을 자유롭게 추가 가능
  console.log(arr1); // 건너 뛴 index는 빈칸(empty)로 채워짐 => length = 5(0~4)

}

// 배열과 for문
function check2() {

  // 일반 for문을 이용해 배열 요소 초기화
  const arr = [];
  for(let i = 0; i <= 3; i++) {
    arr[i] = i * 10;
  }

  console.log(arr);

  // for..of문 이용해 요소에 접근
  for(const value of arr) {
    console.log(value);
  }

  // forEach문 이용해 요소에 접근
  arr.forEach( (value, index) => {
    console.log(index, value);
  })

}