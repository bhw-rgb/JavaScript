// 함수 (Function)
// 재사용

// 함수 정의 -> 어떤 기능을 하는 구조를 ~라고 부르겠다.
// 입력 -> 동작 -> 출력
function add(n1, n2) {
    let result = n1 + n2; 
    return result;  
    // return -> 함수 결과 반환 & 함수 종료 // return이 없을 때 -> 함수는 항상 반환하는데 return이 없으면 undifined 반환
    // 함수 동작 구현부
}

function sub(n1, n2) {
    let result = n1 - n2; 
    console.log(result);

    // 함수 동작 구현부
}

// 함수 호출(call) -> 함수 사용
let result = add(1, 2);
console.log(result);

sub(5,3);