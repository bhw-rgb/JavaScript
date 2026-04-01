// 배열(Array)
// Python: 리스트(List)


    // index:  0.  1.  2.
let numbers = [10, 20, 30];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Python: [-1] -> 리버스
console.log(numbers.at(-1));

console.log(numbers[3]);

console.log("==============");

let scores = [82,95,77]
for (const [i, score] of scores.entries()) {
    console.log(i + "번째 요소의 값:" + "score");
}