var test = document.getElementById("test");
// // 새롭게 열고 싶은 브라우저
// window.open("https://www.google.com");
// // 기존 페이지는 닫히고 새로운 브라우저만 열림
// window.close();

// var trueOrFalse = window.confirm("true or false");
// test.innerHTML = trueOrFalse;

// inner는 보여지는 영역만 outer는 윗부분 포함
test.innerHTML = "width: " + window.innerWidth + " height: " + window.innerHeight;

window.alert("알림창입니다.");

var x = 0;
window.setInterval("interval()", 1000);
function interval(){
    test.innerHTML = ++x;
}

var popup = window.open("", "popup", "width = 400, height = 500");
popup.document.write("<h1>패스트캠퍼스!</h1>");