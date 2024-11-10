var start = parseInt(prompt("Enter the first number of the range"));
var end  =   parseInt(prompt("Enter the last number of the range"));
var evencount = 0;
var oddcount = 0;
var oddsum = 0;
var evensum = 0;
var a;
for(a=start; a<=end; a++){
    if(a % 2 == 0){
        evencount ++;
        evensum += a;
    }
    else{
        oddcount ++;
        oddsum += a;
    }
}
console.log("Even Numbers count is :", evencount);
console.log("Even Numbers sum is :", evensum);
console.log("odd Numbers count is :", oddcount);
console.log("odd Numbers sum is :", oddsum);