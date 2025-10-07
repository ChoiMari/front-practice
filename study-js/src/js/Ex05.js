// 배열 : 순서가 있는 요소들의 집합
// 비 원시 타입
/* 
배열의 생성 
1. 생성자 함수 사용
2. 리터럴 사용
*/

//배열 생성자 함수 사용 new Array()
/*
new Array(value) 형태로 아규먼트가 1개일 때:
value가 숫자(Number) 면 → 길이가 value인 빈 배열 생성
value가 숫자가 아닌 값이면 → 그 값 하나를 가진 배열 생성

아규먼트 2개 이상이면
모든 값을 배열 요소로 취급
*/
let arr = new Array();
console.log(arr); //[]
// 객체는 {} , 배열은 []

let arr2 = new Array(1, 2, 3);
console.log(arr2); //[1,2,3]

let arr3 = new Array(5); // 5칸의 빈 배열
console.log(arr3); // [empty × 5]
// 대부분이 리터럴 방식으로 사용함

//리터럴 방식으로 배열 생성
let arr4 = [];
let arr5 = ["안", "녕", "?"];
console.log(arr4); //[]
console.log(arr5); //(3) ['안', '녕', '?']
// 자료형과 상관없이 작성할 수 있음

let arr6 = [
  { name: "김철수" },
  "후후후",
  123.12,
  () => {
    console.log("배열배열");
  },
  NaN,
  undefined,
  Infinity,
];
// 하나의 배열안에 다양한 자료형으로 이루어진 요소들을
// 저장 가능함(객체,문자열,숫자,함수, 등)

console.log(arr6);
//(7) [{…}, '후후후', 123.12, ƒ, NaN, undefined, Infinity]

//----------------------------------------------------------

// 배열 요소에 접근하기 - 인덱스
// 자바스크립트의 배열 자료구조는 stack
let arr7 = [1, "안녕", "홍길동"];
console.log(arr7[0]); // 1
console.log(arr7[2]); // 홍길동

// 배열에 요소 추가하기
/*
 push() : 배열의 마지막 인덱스에 요소 추가
 unshift() : 배열의 첫 번째 인덱스에 요소 추가
 */

let arr8 = [];
arr8.push(1);
arr8.push(2);
console.log(arr8); //(2)[1,2]
arr8.unshift(3);
console.log(arr8); //(3)[3,1,2]

// 배열 값 수정
const fruits = ["사과", "배", "복숭아"];
fruits[0] = "청포도";
console.log(fruits); //(3)["청포도","배","복숭아"]

//배열 요소 삭제
/*
pop() : 배열의 마지막 요소 삭제
shift() : 배열의 첫번째 요소 삭제
splice(start, deleteCount) : 배열에서 특정 인덱스의 요소 삭제
    start인덱스 부터 deleteCount 개수만큼 삭제함
*/

const numArr = [1, 2, 3, 4, 5];
numArr.pop();
console.log(numArr); //(4)[1,2,3,4]
numArr.shift();
console.log(numArr); //(3)[2,3,4]
numArr.splice(0, 2); //인덱스 0번부터 2개 삭제
console.log(numArr); //[4]

// 배열의 길이 - length
console.log(numArr.length); // 1
