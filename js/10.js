// 1970-01-01이 기준시, date string
var date = new Date("2019-01-01");
console.log(date);
// 하루 24시간, 1시간 60분, 1분 60초, 1초 1000밀리초
console.log(date.getTime());

// 문자열 객체
var str1 = "fastcampus";
var str2 = "hyun jin";

console.log(str1.length);
console.log(str2.length);

// charAt(index)
console.log(str1.charAt(0));
console.log(str1.charAt(1));
// split(구분자)
console.log(str2.split(","));
// indexOf(index)
console.log(str2.indexOf("i"));

// 과제
// 오늘 날짜
var now = new Date();
// D-day 날짜
var count = new Date("2019-02-13");
// 오늘 날짜와 D-day 날짜의 차를 밀리초로 계산
var gap = now.getTime() - count.getTime();

// 두 날짜 사이의 차를 하루로 나눈 값을 소숫점 이하를 버림 연산
gap = Math.floor(gap / (24*60*60*1000) + 1);

// 결과를 반환할 변수
var result = "";

// D-day 계산
if(gap > 0){
    result =  gap;
}else if(gap == 0){
    result = " - day";
}else{
    result = gap;
}

//계산 결과 출력
document.write("D-day를 기준으로 D" + result + "입니다.");