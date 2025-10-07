console.log("잘 나오나?");

//플러그인 설치
// Live Server, Prettier

//1. 변수와 상수
let name;
name = "후후";
console.log(name); // 후후
name = 5;
console.log(name); // 5

// 자바스크립트의 변수 명명 규칙
/*
변수명의 특수문자는 $와 _만 가능하다
변수명 맨 앞에는 숫자 불가
변수명에 예약어(키워드) 사용 불가
*/

// 변수 선언에는 let
// 상수 선언에는 const 사용

const PI = 3.141592;
// 한 번 저장된 값은 변경 불가함
console.log(PI);
//pi = 2; Uncaught TypeError: Assignment to constant variable.
// 값이 변경되는 것을 방지 하기 위해 사용된다.
// 의미상 변하지 않는 전역 값인 상수는 대문자와 _사용함

//2. 자료형과 형변환
/*
원시 타입 : 한 번에 단 하나의 값만을 가지는 타입
비 원시 타입 : 한 번에 여러 개의 값을 가지는 타입
    객체,함수,배열
*/

// typeof연산자 : 값의 데이터 타입(자료형)을 문자열로 반환하는 연산자
/*
문법
typeof 변수명
typeof(변수명)

둘 다 똑같이 작동함
 */

let isOn = true;
console.log(typeof isOn); // boolean

let age = 10;
console.log(typeof age); //number

/**
 * 원시형
 *  string : 문자열(문자)
 *  number : 숫자(정수, 실수)
 *  bigint : 큰정수
 *  boolean : 참/거짓
 *  undefined : 값이 정의 되지 않음
 *  null : 참조 값이 없음
 *  symbol : 객체의 키용(고유한 식별자)
 *
 * 비원시형(객체형)
 *  object : 키 - 값 쌍으로 구성된 복합 자료형
 *  배열 : 자바스크립트의 배열은 stack(선입 후출)
 *      여러 값을 순서대로 저장하는 객체
 *  함수 : 호출 가능한 객체
 *  자바스트립트의 함수는 1급 객체
 * (값처럼 변수에 할당 가능, 함수의 파라미터로 선언해서 받을 수 있고, 리턴값으로도 사용 가능)
 *
 */

//number(숫자형 - 정수, 실수)
let num1 = -3;
let num2 = 0.2;
console.log(`num1 : ${typeof num1}, num2 : ${typeof num2}`);
// num1 : number, num2 : number

//Infinity : 무한대
//NaN : Not a Number 숫자가 아니다

console.log(typeof Infinity); //number
console.log(typeof NaN); // number

num1 = 100 / 0;
console.log(num1); //Infinity(0으로 나눌 경우 반환)

num2 = NaN;
console.log(typeof num2); // number

num2 = "사천" / 100;
console.log(num2); // NaN

//BigInt : 큰 범위의 +- 정수 값을 안전하게 사용 가능함
//문법 : 숫자끝에 n을 붙이거나, BigInt()로 나타냄

let big1 = 111111111111111111111111111111111111111n;
console.log(typeof big1); //bigint

let big2 = BigInt("7777777777777777777777777777");
console.log(typeof big2); //bigint

//string
let hi = "안녕 ㅎㅎ";
console.log(typeof hi); // string
//"" '' `` 사용 가능

let hello = `안녕하세요! 나는 ${age}살이에요`;
console.log(typeof hello + " " + hello);

//boolean
let isClose = true;

if (isClose) {
  console.log("닫혔다"); // 실행됨
} else {
  console.log("안 닫혀있음");
}

//null
let num = null;
console.log(typeof num); //object
//null임을 확인하기 위해서는 typeof연산자 대신
// === null이라고 해야 한다

//Undefined : 값이 정의되지 않은 상태
let num3;
console.log(num3); //undefined
//변수에 값이 할당되지 않은 상태
console.log(typeof num3); //undefined

/**
 - 자바스크립트는 프로그램 실행 중에 자료형이 변한다.
 - 변수에 값이 저장될 때 타입이 결정됨
 */
let num4 = 100;
num4 = "100"; //-> 이렇게 하나의 변수에 다른 타입을 저장해도
// 아무런 에러 없이 유연하게 동작함
//-> 값과 함께 타입이 변한다 -> 동적타입언어

// 암시적(묵시적)형변환, 명시적 형변환
