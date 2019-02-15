var colorArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var p = document.getElementById("test");

p.onmouseover = function(){
    var rand = Math.floor(Math.random() * colorArr.length);
    p.style.backgroundColor = colorArr[rand];
};

p.onmouseout = function(){
    p.style.backgroundColor = "black";
};

// addEventListener는 익스플로러에서 작동하지 않을 수 있음.
document.getElementById("btn1").addEventListener("click", function(){
    alert("실행문1");
}, false);

document.getElementById("btn1").addEventListener("click", function(){
    alert("실행문2");
}, false);