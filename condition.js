// Python: if / elif / else


// JS: if / else if / else

    let age = 20;

    if (age >= 19) {
        console.log("성인");
    } else if (age >= 8) {
        console.log("학생");
    } else {
        console.log("어린이");
    };

    // true 값 반환: 50,1,-1,"100","0",true -> truethy
    // false 값 반환: false, 0, "", null, undefined, NaN -> falsy
    
    let score = 50;
    if (score) {
        console.log("점수:" + score);
    } else { 
        console.log("점수 없음");
    };