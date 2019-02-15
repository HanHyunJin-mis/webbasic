function getDate(){
     var result = "";
     var year = new Date().getFullYear();
    //  getMonth 메소드는 0월부터 1월을 나타낸다.
     var month = new Date().getMonth() + 1;
     var day = new Date().getDate();
     result = year + "-" + month + "-" + day;
     document.getElementById("test").innerHTML = result;
}