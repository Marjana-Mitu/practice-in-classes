// var a = 10
// var b = 30
// for (var i=100; i<=300; i+=50){
//     a+= 20;
//     if(a+b >= 100){
//         b+=20;
//     }
// }
// console.log(a);
// console.log(b);
// console.log(i);




// var a = 10
// var b = a*3
// for (var i=b; i<=80; i+=5){
//     if(i%2 == 0){
//         a = a+b;
//     }
//     i+=10
// }
//  a++
//  b++
// console.log(a);
// console.log(b);
// console.log(i);



var abc = 100;
var xyz = 500;
var count=0;
for (var i=100; i<=1000; i+=10){
    count ++;
    abc +=10;
    xyz -=20;
    if (count>=5){
        break;
    }

}
console.log(abc+xyz+i);