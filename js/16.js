// e라는 매개변수

// document.getElementsByName("testText")[0].onkeydown = function(e){
//     var eventCode = e.code;
//     console.log(eventCode, typeof eventCode);
// };

//자동완성에 쓰인다.

// document.getElementsByName("testText")[0].onkeydown = function(e){
//     var eventCode = e.code;
//     if(eventCode == 'Digit1'){
//         document.getElementById("test").innerHTML = "<img src = '/images/2.jpg'>"
//     }else if(eventCode == 'Digit2'){
//         document.getElementById("test").innerHTML = "<img src = '/images/1.jpg'>"
//     }else{
//     }
// };

// document.getElementsByName("testText")[0].onkeyup = function(e){
//     if(e.code == 'Backspace'){
//         document.getElementById("test").innerHTML = "";
//     }
// };

//키보드 접근성 - 마우스 부재시 작동할ㄹ 이벤트 등록

// tab키를 눌렀을 때 사용 (tab을 누를 때 마우스로 선택되어있던 부분이 움직이는 것)
document.getElementsByClassName("btn")[0].onfocus = function(){
    document.getElementById("test").innerHTML = "Tab을 이용한 이벤트 -> onmouseover"
};

document.getElementsByClassName("btn")[0].onblur = function(){
    document.getElementById("test").innerHTML = "Tab을 이용한 이벤트 -> onmouseout"
};