// 사진에 마우스를 올리면 class 속성을 자동으로 추가
document.getElementById("wrap").onmouseover = function(){
    this.setAttribute("class", "over");
};

// 마우스를 사진에서 떼면 class가 자동으로 사라짐
document.getElementById("wrap").onmouseout = function(){
    this.setAttribute("class", "");
};