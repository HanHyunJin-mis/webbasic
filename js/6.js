var x = 10;
var y;
y = x++;
console.log(y);
console.log(x);

// 나머지를 구하는 기호
console.log(20 % 10);
console.log(15 % 10);

var z = 10;
console.log(z += 1);

var a = 10, b = "10";
console.log(a == b);
console.log(a === b);

console.log(a != b);
console.log(a !== b);

var c;
// 삼항 연산자
// a와 b가 같다면 c에 10을 넣고 아니면 11을 넣음
console.log(c = a == b ? 10 : 11);
console.log(c = a === b ? 10 : 11);

// 문제
//자바스크립트 언어는 문자열과 숫자를 결합할 경우 문자열 데이터 타입이 됩니다.
var str3 = 1 + 1 + "귀요미";
console.log(typeof str3, str3);
// 문자가 먼저 나올 경우 뒤의 숫자는 문자가 된다.
var str4 = "귀요미" + 1 + 1;
console.log(typeof str4, str4);