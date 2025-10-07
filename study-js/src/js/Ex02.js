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
