var evensum = 0;
var evencount =0;
var counter = 0;
var a;
for(a=5; a<=100; a+=5){
    if(a % 2 == 0){
        evencount ++;
        evensum += a;
    }
    if(counter === 5){
    break;
}
}
console.log("sum of first five even numbers is:", evensum);