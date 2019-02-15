//간단한 자동완성 만들기 
//ul, list
var autocomplete = document.getElementById("autocomplete");
//input
var search = document.getElementById("search");

// 입력값이 cat인 경우 -> wordList 배열의 값을 하나씩 받아옴
// 입력값이 없는 경우 -> 빈 문자열 나타냄
// 입력값은 있지만 cat이 아닌 경우 -> "검색 결과가 없습니다."

var wordList = ["Russian blue", "British Longhair", "Burmilla", "Bombay"];
var word = "";

search.addEventListener("keyup", function(e){
    var keyword = search.value;
    if (keyword == "cat"){
        
        for(var i = 0; i < wordList.length; ++i){
            word += "<li>" + wordList[i] + "</li>";
        }
        autocomplete.innerHTML = word;
    }else if(keyword == ""){
        autocomplete.innerHTML = "";
    }else{
        autocomplete.innerHTML = "<li>검색 결과가 없습니다.</li>";
    }
    word = "";
}, false);