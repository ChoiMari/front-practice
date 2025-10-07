// 생성자 함수
// 생성자 함수로 사용되는 함수명은 대문자로 시작
// 새로운 객체를 생성하는데 사용되는 특수한 함수
/*
문법
function 생성자함수명(매개변수1, 매개변수2, ...) {
  this.속성1 = 매개변수1;
  this.속성2 = 매개변수2;

  this.메서드 = function() {
    // 객체 전용 기능
  };
}

*/
function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.printName = function () {
    console.log(`강아지의 이름은 ${this.name}입니다.`);
  };
}
/*
this.속성 = 아규먼트 → 새로 만들어진 객체 {} 안에
속성: 값 형태로 저장되는 것

this.name = name;
{name: "아규먼트로 들어온 값"} 와 같음
this.name이게 키고, 파라미터로 넣은게 값이 됨
*/
let dog1 = new Dog("바둑이", 1);
//{name : "바둑이", age : 1}와 같음

let dog2 = new Dog("두부", 3);
console.log(dog1.age); // 1
console.log(dog2.name); //두부

dog2.printName(); // 강아지의 이름은 두부입니다.
