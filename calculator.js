function calculator(a, b, operator) {
    if(operator === "+") {
        console.log(a + b);
    } else if(operator === "-") {
        console.log(a - b);
    } else if(operator === "*") {
        console.log(a * b);
    } else if(operator === "/") {
        console.log(a / b);
    } else {
        console.log("지원하지 않는 연산자 입니다.");
    }
};

calculator(10,5,"+")
