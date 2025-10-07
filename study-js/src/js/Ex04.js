// 객체(Object) - 비 원시 자료형 타입

//객체를 생성하는 방법
/*
1. 생성자 함수 사용
2. 리터럴 사용
*/

// 생성자 함수를 사용한 객체 생성
let obj = new Object();
console.log(obj);

// 리터럴을 사용하는 방법
let obj2 = {}; //{}를 사용해서 객체를 생성하는 방법
console.log(obj2);
//{} 빈 객체 리터럴
// {} 리터럴 방식이 가장 많이 쓰인다
// 자바스크립트에서는 객체를 {}로 나타낼 수 있다

/* 객체의 속성(property)
 {}내부에 들어갈 데이터
 자바스크립트의 객체는
    키와 값의 쌍으로 이루어져 있다.

    :을 기준으로
    key : value
 */
const like = "you";
let propName = "job";
let person = {
  name: "홍길동",
  age: 100,
  hobby: "활쏘기",
  like, //key값이 변수명과 같으면 like만 작성가능
  // like : "you"와 같음
  [propName]: "IT",
};
let key = "age";
// 객체 프로퍼티의  key 값은 고유값으로 작성해야한다.
// key값이 중복되면 나중에 작성된 값이 덮어쓰기 된다
// key는 문자열(string)또는 심볼만 가능함
// value값으로는 어떠한 자료형을 넣어도 OK
console.log(person);

// 객체 접근 방식 - 대괄호 표기법
// 객체명["key"] -> value 반환
console.log(person["name"]); // 홍길동
console.log(person["hobby"]); // 활쏘기
console.log(person[key]); // 100
console.log(person["like"]); //you
console.log(person["job"]);

//객체 접근 방식 - 점 표기법
//객체명.속성명 -> value 반환
console.log(person.name); //홍길동
console.log(person.age); //100
console.log(person.like); //you
console.log(person.job); //IT

let fruit = {
  name: "사과",
  color: "red",
};

const getName = (obj, key) => {
  console.log(obj[key]);
};
getName(fruit, "name"); //  사과
getName(person, "name"); // 홍길동

//객체 프로퍼티(속성)을 추가, 삭제 하기
let dog = {
  name: "푸푸",
  age: 5,
};

// 속성 추가 - 점표기법, 대괄호 표기법 둘 다 가능
//객체.newkey = 값 할당
// 객체[newkey] = 값할당
dog.color = "베이지색";
dog["favorite toys"] = ["공", "뼈다구"];
// color : "베이지색"과 같음
console.log(dog);

// 자바스크립트에서 {}는 객체
// []는 배열

//객체 프로퍼티 값 수정
dog.name = "포포";
dog["age"] = 10;
console.log(dog);

// 객체는 const로 선언하더라고
// 프로퍼티의 값은 수정할 수 있다!

const cat = {};
cat.name = "콩이";
cat["owner"] = "둥환이";
console.log(cat);

cat.owner = "미워";
console.log(cat);

//객체는 const로 선언하더라도 왜 프로퍼티 값을 수정할 수 있을까?
// 프로퍼티 수정과 객체 수정은 다른거라..
//지바스크립트의 const는 변수를 불변으로 만드는 것이 아니라
// 재할당을 막는것!
// 변수 이름이 가리키는 주소값을 바꿀 수 없게만 막는것!
// 그래서 그 객체(주소안에 들은)의 내용(프로퍼티값)변경은 가능하다.
// const 변수가 담고있는 주소값 변경이 아니라 가능한 것.

//cat = {};
// Ex04.js:112 Uncaught TypeError: Assignment to constant variable.
// 이건 객체에 새 값(참조)을 할당하는 거라서 에러
//console.log(cat);

// 객체 프로퍼티 삭제
// delete키워드를 사용함
// 문법
// delete 객체명.프로퍼티명;
// delete 객체명["프로퍼티명"];

delete cat.owner;
console.log(cat);

delete dog["age"];
delete dog.color;
console.log(dog);

//객체 프로퍼티로 함수를 사용해봄
const person2 = {
  name: "김유신",
  age: 80,
  printHibby: (hibby) => {
    console.log(hibby);
  },
};
//printHibby 속성의 값은 함수 객체의 메모리 주소
/*person2.printHibby는 
person2객체 안의 printHibby 키를 찾아서
그 값(함수 객체의 참조 주소)를 반환함
*/
person2.printHibby("줄타기");
// 가져온 참조(함수의 메모리주소)에 괄호를 붙였으므로 함수가 호출된다.
//파라미터에 "줄타기"가 전달됨
// 함수 내부 실행

/* 자바스크립트에서는 함수가 1급 객체(값)라서
변수에 저장 가능, 객체 속성의 값으로 사용 가능,
 파라미터의 값으로 전달 가능, 리턴 값으로 반환 가능함
 그냥 함수가 값 취급 받는다고 이해하면 된다
 그 값이 함수가 메모리에 할당된 주소값
 */
person2["printHibby"]("배타기");

// 객체 프로퍼티의 값이 함수일 경우? 메서드라고 부름
// 객체 안에 선언된 함수 -> 메서드
// 메서드는 객체 내부 프로퍼티에 접근 할 수 있는 특별한 기능이 있다
//주의) 단, 화살표 함수는 자신만의 this를 가지지 않기 때문에
// 객체 메서드안에서 다른 프로퍼티에 접근 불가함.
//객체 안에서 다른 프로퍼티에 접근해야 하는
// 메서드는 화살표 함수로 작성하지 않는다.

const person3 = {
  name: "춘향이",
  age: 22,
  printAge: function () {
    console.log(`춘향이 나이는? ${this.age}`); //22
    console.log("this : " + this); //[object Object]
  },
  printName: () => {
    console.log(`이름은? ${this.name}`); // this.name안나옴..
    console.log("this : " + this); //[object Window]
  },
};

person3.printAge();
console.log(person3.printAge()); //undefined : 리턴값이 없으므로..
//화살표 함수는 this가 객체를 가리키지 못하고
// 가장 바깥에 있는 글로벌(전역)객체인 윈도우 객체를 가르킴
// 그래서 this키워드로 객체안의 다른 프로퍼티에 접근하지 못한다.
person3.printName();
