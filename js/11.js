document.getElementById("heading").innerHTML = "h1 태그입니다.";
// s가 붙는 메소드들은 인덱스로 어떤 값을 바꿀지 지정을 해주어야 함
// document.getElementsByClassName("paragraph")[0].innerHTML = "p 태그입니다.";
var tagName = document.getElementsByTagName("p");
var len = tagName.length;
for(var i = 0; i < len; ++i){
    tagName[i].innerHTML = "p 태그입니다.";
}
document.querySelectorAll("div#container > h1#heading")[0].innerHTML = "h1 태그입니다!";
