//자바스크립트의 반복문
// 특정 작업을 반복적으로 수행할 때 사용
let num = 5;
for (let i = 0; i < num; i++) {
  console.log(i);
}

console.log("----------------------------");

let i = 0;
while (i < num) {
  console.log(i++);
}
console.log("----------------------------");
let arr = [0, 1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("----------------------------");
for (let index in arr) {
  console.log(arr[index]);
}
console.log("----------------------------");
for (let value of arr) {
  console.log(value);
}

//객체를 배열로 변환하기
let person = {
  name: "홍길동",
  age: 22,
  height: 188,
};

//Object.keys(객체의주소) 사용
// 객체의 key(프로퍼티명)들을 배열로 반환하는 메서드

let personArr = Object.keys(person);
console.log(personArr); //(3) ['name', 'age', 'height']

for (let value of personArr) {
  console.log(value + " : " + person[value]);
}
console.log("------------------------------");
// Object.values(객체 주소);
// 객체의 값을 배열로 반환하는 메서드
let valueArr = Object.values(person);
for (let value of valueArr) {
  console.log(value);
}

//Object.entries(객체주소);
// 객체의 키, 값 쌍을 배열로 반환
// 반환 형태는 2차원 배열
//[[키,값],[키,값],...,[키,값]]
let keyValueArr = Object.entries(person);
console.log(keyValueArr); //(3) [Array(2), Array(2), Array(2)]
//(3) [["name" , "홍길동"],["age", 22],["height", 188]]

/*
  for(let index in arr){}
  for(let key in obj){} 
  객체는 for ... in 쓰면 key값을 줌
 */

// 배열 메서드
//forEach(callback) : 배열의 각 요소를 순회하며,
// 콜백 함수를 실행함
// 리턴 값이 없는 반복문용 메서드
// 보통은 콜백 함수에 바로 화살표 함수 넣어서 씀
// 콜백함수의 매개 변수는 3개로 정의됨
// callback(value, index, array)
// 포이치 비바(VIA)
let numArr = [1, 2, 3, 4, 5];
numArr.forEach((val, index, arr) => {
  console.log(index + " " + val);
});
