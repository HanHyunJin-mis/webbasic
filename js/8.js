var arr = [1, 2, 3, 4, 5];
console.log(arr);

// 길이를 할당해주는 것이 효율이 높다.
var len = arr.length;
var idx;
for(var idx = 0; idx < len; ++idx){
    console.log(arr[idx]);
}

var idx = 0;
while(idx < len){
    console.log(arr[idx]);
    ++idx;
}

while(idx < len){
    if(idx ==2){
        break;
    }
    console.log(arr[idx]);
    ++idx;
}

// 과제
// 문자열 결합 반복 처리하기
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = "";
var len = arr.length;
for(var i = 0; i < len; ++i){
    for(var j = 1; j <= 9; ++j){
        result += arr[i] * j + "<br>";
    }
}
document.write(result);