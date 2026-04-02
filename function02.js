// 함수를 값처럼 다루기
// 1) 함수를 변수에 할당할 수 있다.

// 함수 정의
function sayHello() {
    console.log("Hello");
};

// 함수 호출 -> 기능을 실제로 사용
sayHello()

// 함수 -> 기능 자체
const fn = sayHello

console.log(fn);

// 2) 함수를 다른 함수의 인자로 전달 가능
function run(fn) {
    console.log("start function run...")
    fn();
    console.log("end function run...")
}

run(sayHello);
// run(sayHello()); -> satHello() 는 undefined 값이므로 run(undefined)랑 똑같음 -> undefined 라는 함수는 존재하지 않음!
// (기본) 함수를 선언한 곳에서 직접 호출
// (응용) 함수를 선언한 곳과 호출하는 곳을 다르게 한다. -> 내가 설정한 함수를 다른 라이브러리에 넘겨서 응용함

undefined();