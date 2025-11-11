/* console.log(값);
 => 브라우저 콘솔창에 괄호() 내부의 값을 출력 */
console.log(1234);
console.log("문자열은 쌍따옴표 안에 작성");
console.log('JS는 홑따옴표 내부도 문자열로 취급');

// --------------------------------------------------------

/* 변수의 선언
  : 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것

  [작성법]
변수종류 변수명;
*/
var number1;

/* 초기화 
  : 변수에 값을 처음으로 할당하는 과정

  [작성법]
변수명 = 값; (=> 이미 만들어진 것에 값만 넣는 것)
*/
number1 = 10;

// 콘솔에 number1 값 출력
console.log(number1);

// 선언과 동시에 초기화
var number2 = 20;

console.log(number2);

// number1, number2 합 출력
console.log(number1 + number2);

// 변수에 대입한 값 변경 (== 재대입)
number1 = 300;
number2 = 400;

// 변경된 변수의 값 출력
  // 1) 문자열 + 문자열/숫자/변수 == 이어쓰기 ok
  console.log("number1의 값 : " + number1);
  console.log("number2의 값 : " + number2);
    // cf) console.log("100" + 100); => 100100 출력
  // 2) 괄호 내부에 , 작성 => 각각 값을 독립적으로 출력
    // 형변환 없이 출력되어 문자열 따로, 다른 자료형 따로 독립적으로 출력
  console.log("number1 : " , number1);
    
// -----------------------------------------------------------------------

/* var, let, const 차이점

  1. var (변수, 변수 선언 시 중복되는 변수명 선언 가능)
    => 먼저 선언된 변수에 나중에 선언된 변수가 덮어씌워짐 */
    var menu = "삼겹살";
    console.log("menu : ", menu);

    var menu = "초밥";
    console.log("menu : ", menu);
    // 변수명이 중복되어 덮어쓰기되면 이전에 저장한 변수값을 쓸 수 없게 됨

// 2. let (변수, var의 변수명 중복 문제 해결)
    let number3 = 25;

    console.log("number3 : ", number3);

    // let number3 = 500;  똑같은 변수명 중복 선언 불가

    number3 = 500; // 당연히 재대입은 가능

    console.log("number3 : ", number3);

/* 3. const (상수, constant)
     => 한 번 값이 대입되면 새로운 값 대입 불가 */
    const PI = 3.141592;

    /* PI = 123; => TypeError: Assignment to constant variable.
      상수로 배정 되어있다. => 상수에 새로운 값을 대입할 수 없는데, 재대입을 하여 오류 발생 */

    // const test; 선언과 동시에 반드시 초기화해야! 선언만은 불가능 
    
// ---------------------------------------------------------------------------------------------

/* 블록 레벨 scope / 함수 레벨 scope

  - 블록 레벨 scope (let, const)
  let과 const로 선언된 변수는 그 선언된 블록 내에서만 유효
  즉, 코드 블록 내부에서 선언한 변수(let, const)는 해당 블록 외부에서 접근 불가 */

let foo1 = 123; // 전역 변수 => 블록과 관계없이 접근 가능
const foo2 = 456; // 전역 상수 => 블록과 관계없이 접근 가능

{ // 블록 레벨
  let num1 = 789; // 지역 변수
  const num2 = 0; // 지역 상수
}

console.log(foo1);
console.log(foo2);
//console.log(num1);
//console.log(num2);
  // => 둘 다 블록 레벨 scope이기 때문에 블록 외부에서 접근 불가!

/* if, for, while, switch, try 등 => 블록
  thus, 블록{}으로 감싸진 범위면 전부 블록 레벨 scope 생김 */


/*
  - 함수 레벨 scope (var)
  var 키워드로 선언된 변수는 함수 내 어디서든 접근 가능
  if, for 등의 일반 블록은 무시하고 var로 선언된 변수가 있는 함수 전체에서 유효
 */
var test1 = 123;

{ // 블록 레벨
  var test2 = 456;
}

console.log(test1);
console.log(test2);
  // test2도 출력 가능 -> why? 함수 레벨 scope인 var는 일반 블록은 무시

function example() { // 함수 형태로 만들어진 코드 블록은 일반 블록이 아닌 함수 레벨 scope
  var test3 = '함수 레벨 var 테스트';
  console.log(test3);
}  

example(); // 함수 내에서 console.log 실행 후, 함수 외부에서 함수 호출해야 출력 가능

// console.log(test3); => ReferenceError: test3 is not defined
  /* var는 일반 블록 레벨만 무시, 함수 레벨 블록은 무시하지 못함
    즉, 함수 블록 안에서 선언된 var는 해당 함수 내에서만 사용 가능! */

function example2() { // 함수 블록 (함수 레벨 scope)

  if(true) { // 일반 블록 (블록 레벨 scope) => var가 무시 가능
    var x = 10;
  }

  console.log(x);
}    

example2();

// -----------------------------------------------------------------------------------------

/* 1. var 호이스팅
  : var로 선언된 변수는 선언만 해당 scope의 최상단으로 호이스팅 됨.
   초기화는 원래 코드 위치에서 수행. */

console.log(a); // undefined

var a = 10; // 전역 scope에 선언과 동시에 초기화 

console.log(a);

/* 2. let / const 호이스팅
  : let/const로 선언된 변수는 선언만 해당 scope의 최상단으로 호이스팅 됨.
    var와 달리 let/const로 선언된 변수는 초기화가 이뤄지기 전에는 사용 불가 */

/* 내부적으로 let x; 선언은 끌어올려진 상태 => x의 선언이 호이스팅 됨.
  but, TDZ에 놓여 초기화 전까진 접근 불가
  초기화 전까지 해당 변수는 TDZ에 놓이며, 그 상태에서 접근하려 하면
  Cannot access 'x' before initialization 에러 발생
    cf) TDZ(Temporal Dead Zone) : 시간적으로 죽은 구역
      => 코드 실행 과정에서 특정 시점까지 변수가 접근 불가능한 상태를 의미
      => JS에서 let/const 키워드로 선언된 변수가 초기화되기 전까지 접근할 수 없는 구간 */

// console.log(x); => ReferenceError: Cannot access 'x' before initialization(초기화 전에 접근 불가)

let x = 50;

console.log(x); // 초기화 이후이므로 접근 가능

/*** 이러한 특성 때문에 let/const가 var보다 예측 가능한 코드 작성 가능
thus, 오늘날 let/const 지향! ***/

// ----------------------------------------------------------------------------------------------------



/* JS 자료형 확인
typeof 연산자 : 변수나 값의 자료형을 출력해주는 연산자 */

// undefined : 정의되지 않은 변수 => 값이 아직 대입되지 않았다
let undef; // 변수 선언
console.log("undef : ", undef, typeof undef);

// string(문자열) : "" 또는 ''로 작성된 값
const userName = '홍길동';
console.log("userName : ", userName, typeof userName);

const phone = '01012341234';
console.log("phone : ", phone, typeof phone);

const gender = 'M'; // 홑따옴표 & 한글자만 작성해도 string(not Char)
console.log("gender : ", gender, typeof gender);

// number (정수, 실수, 양수, 음수, 0 등 모든 숫자)
const age = 25;
const height = 150.5;
const eyesight = -5; 

console.log("age : ", age, typeof age);
console.log("height : ", height, typeof height);
console.log("eyesight : ", eyesight, typeof eyesight);

// boolean (논리값 true/false)
const isTrue = true;
const isFalse = false;

console.log("isTrue : ", isTrue, typeof isTrue);
console.log("isFalse : ", isFalse, typeof isFalse);

// object (객체) : 값을 여러개 저장할 수 있는 형태
  // 1) 배열(Array) : 여러값이 나열되어 있는 것의 묶음
  const numbers = [10, 20, 30];
  console.log("numbers : ", numbers, typeof numbers);

  console.log("numbers 배열값 중 0번 째 : ", numbers[0], typeof numbers[0]);
  console.log("numbers 배열값 중 1번 째 : ", numbers[1], typeof numbers[1]);
  console.log("numbers 배열값 중 2번 째 : ", numbers[2], typeof numbers[2]);
  console.log("numbers 배열값 중 3번 째 : ", numbers[3], typeof numbers[3]);
    /* JS에서의 배열은 값 추가/삭제 가능 => 크기가 고정되지 않고 필요에 따라 자동으로 늘고 줄어듦
      thus, 배열 크기를 벗어난 값을 입력해도 그만큼 크기를 늘리고 값만 없는 상태로 인식 */

  /* 2) JS 객체 : 값을 K:V (Map) 형식으로 여러 개 저장하는 형태
       => {K:V, K:V, K:V, ...} 

       K(Key) : 값을 구분하는 이름 (변수명과 비슷)
       V(Value) : K에 대응되는 값 (변수에 대입되는 값과 비슷) */
  const user = { id:"user01", pw:"pass01", userName:"홍길동", age:20 };
  console.log("user : ", user, typeof user);
  
    /* 객체에 존재하는 값을 하나씩 얻어오기
      방법 1 : 변수명['key'] => 대괄호 안은 문자열로 작성
      방법 2 : 변수명.key */
    console.log(user['id']); //user01
    console.log(user.id, user.pw, user.userName, user.age);


/* 함수(function)

  [작성법]
 const 변수명 = function() {}; 
 => 변수명이 함수명이 됨 */
const sumFn = function(a, b) { return a+b }; // 익명함수
// function sumFn(a, b) { return a+b }; 와 같은 것

console.log(typeof sumFn); // function

console.log( sumFn(3,5) ); // console창에 8이 출력되게끔 하는 예시


// null
console.log(typeof null); // object