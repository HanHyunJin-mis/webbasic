var x = 10, y = '10', z = true;

if (x == 10 && y === 10){
    console.log("x는 10입니다.");
}
if (x == 10 || y === 10){
    console.log("x는 10입니다.")
}
z = false;
if (!z){
    console.log("z는 거짓입니다.")
}
// }else if(y == 10){
//     console.log("y는 10입니다.");
// }else{
//     console.log("이 모든 조건이 거짓입니다.")
// }

var a = 15;
switch(a){
    case 5: console.log("5");
        break;
    case 10: console.log("10");
        break;
    default : console.log("15");
    }

b =90;
if(b >= 90){
    console.log("A");
}
if(b >= 80 && 90 > b){
    console.log("B");
}
if(b >= 70 && 80 > b){
    console.log("C");
}
if(b >= 60 && 70 > b){
    console.log("D");
}
if(b < 60){
    console.log("F");
}
