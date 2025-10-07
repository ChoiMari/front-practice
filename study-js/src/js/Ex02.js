//연산자

// ===값과 타입 비교, == 값 비교

// !==값과 타입까지 다른지, != 값만 다른지

let num1 = 10;
let num2 = "10";
console.log(num1 === num2); // false
console.log(num1 == num2); //true

console.log(num1 !== num2); // true
console.log(num1 != num2); // false

//null 병합 연산자
// ??
/*
문법
a ?? b
a가 null 또는 undefined이면 b
a가 null 또는 undefined가 아니면 a를 사용한다
*/
let a;
let b = 20;

let number = a ?? b;
console.log(number); //20

//조건문
//if문
let num3 = 111;
let num4 = 222;
if (num4 > num3) {
  console.log(`${num4}은 ${num3}보다 크다`);
  //222은 111보다 크다
}

//switch case
let fruit = "사과";
switch (fruit) {
  case "배":
    console.log("배가 맛있다");
    break;
  case "사과":
    console.log("사과가 맛있다"); // 실행됨
    break;
  default:
    console.log("다른 과일이 맛있다");
}

//switch문은 내부적으로 === (엄격한 비교, strict equality)를 사용

let num5 = 10;

switch (num5) {
  case "10":
    console.log("문자열 10"); //실행 안 됨 (타입 다름)
    break;
  case 10:
    console.log("숫자 10"); //실행됨
    break;
}
