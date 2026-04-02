// JS 문법(조건문, 반복문, 함수 등) 활용하는 실습

const scores = [80, 85, 92, 97];

// 평균 = 총합 / 개수
function getAverage(scores) {           // 함수 정의

    if (scores.length === 0) {          // 배열 비어있으면
        return 0;                       // 반복문으로 scores 총합 구하고 갯수로 나눔
    }

    let sum = 0;                     

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;         // 함수 반환
}

const average = getAverage(scores);     // 함수 지정
console.log(average);                   // 함수 호출