//function 함수
/*
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);
*/

//[참고]
//자바스크립트에서는 변수명, 함수명, 클래스명 모두
// 같은 식별자 테이블에서 관리함

//이걸 함수로 바꿔봄
function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 20); //30
// 함수 호출

/*
 function 함수명(파라미터선언){
 //파라미터에 타입 지정없음
 //let, const 이런 키워드 함수의 파라미터 선언에 사용하지 않음
 }

 리턴 타입 명시 하지 않음
  return문 없을 시에는 undefined를 리턴함
 
 함수 표현식 - 함수를 변수에 저장해서 쓸 수 있다
 const add = function(a,b){
    return a + b;
 } 
 //익명 함수 생성   
 // add에 함수의 메모리 주소값(참조)을 저장함
 console.log(add(1,3)); // 4
//변수 add가 가리키는 함수가 실행됨

화살표 함수
const subtract = (a,b) => a - b;
console.log(subtract(5-2)); // 3

function키워드 생략
파라미터가 1개이면 ()생략 가능
내부 실행 코드가 1줄일 경우 {}생략 가능
*/

//깔깔깔깔 여기까진 너무 쉽다 ㅋ.ㅋ

//스코프 : 변수와 함수가 영향을 미치는 범위
// 접근 가능한 범위

//전역 스코프, 지역 스코프

let globalNum = 200;
// 전역 변수(외부변수) - 전역 스코프
// 어디에서나 접근 가능한 스코프를 가지고 있음

console.log(globalNum);
(function () {
  console.log(globalNum);
})();
// 문법 : (익명함수)();
//정의와 동시에 호출

(function (name) {
  console.log("안녕하세요, " + name);
})("홍길동");

/*호이스팅
자바스크립트가 변수 선언과 함수 선언을 코드 실행 전에
끌어 올리는 것처럼 처리하는 동작
*/

// 함수 호이스팅
console.log(plus(1, 2)); // 에러 발생 X
function plus(a, b) {
  return a + b;
}

// 이렇게 함수 선언 전에 먼저 호출해서 사용함...
// 가능한 이유? 함수 선언문은 호이스팅 시 전체 내용이 등록되기 때문에
// 코드의 위치와 상관없이 호출이 가능함
//호이스팅 = 메모리 위로 끌어올리는 것처럼 처리

//변수 호이스팅 - 선언보다 위쪽에서 사용될 경우
console.log(hihi); //undefined
// var hihi; 변수 선언만 호이스팅

var hihi = "안녕하십쇼";
// var hihi;
// console.log(hihi); //undefined
// hihi = "안녕하십쇼";
//-> 이렇게 해석됨

//console.log(hoho);
//Ex03.js:91 Uncaught ReferenceError: Cannot access 'hoho' before initialization
//변수를 선언하기 전에 접근했기 때문에 발생
let hoho = "호호";

//-> var는 호이스팅 되어 선언 전에 접근 가능
//let과 const는 접근 불가
// let / const는 반드시 선언 후 사용
// let과 const가 호이스팅 되지 않는것은 아니고
// let과 const는 변수의 초기화가 완료화 될 때까지
// TDG라는 일시적인 사각지대
// 변수를 사용하는 것을 허용하지 않는 공간에 있기 때문에
// 사용이 불가함

//----------------------------------------------

// 함수 표현식 & 화살표 함수
const add = (a, b) => a + b;
console.log(add(5, 10));

//콜백 함수 : 다른 함수의 파라미터로 넘겨준 함수
/*
const printSum = (a, b) => {
  let result = a + b;
  console.log(result);
};

const printDouble = (a, b) => {
  let result = a + b;
  console.log(result * 2);
};

printSum(1, 3); //4
printMultiply(3, 2); // 10
*/

//중복되는 부분을 묶어봄
const calc = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printSum = (result) => {
  console.log(result);
};

const printDouble = (result) => {
  console.log(result * 2);
};

calc(1, 3, printSum); // 4
calc(3, 2, printDouble); // 10

//파라미터(매개변수)로 전달 받은 함수를 콜백 함수라고 함

// 아규먼트로 익명함수 만들어서 바로 넣어줄 수도 있음
const test = (callback) => {
  callback(); // 아규먼트로 받은 함수 주소로 호출
};

test(() => {
  console.log("화살표함수 + 콜백 함수");
});
