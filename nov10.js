// var totalQ = parseInt(prompt("How many quizzes were taken?"));
// var sum = 0;
// var avg;
// var i;
// for (i=1; i<=totalQ; i++){
//     var presentQ = parseInt(prompt(`Enter marks of Quiz# ${i}`));
// // sum = sum + presentQ
// sum += presentQ;
// }
// avg = sum / totalQ ;
// console.log("your quiz average is:", avg);



var fisrtN = parseInt(prompt("Enter the first Number for the range"));
var lastN = parseInt(prompt("Enter the last Number for the range"));
var i;
var evencount = 0;
for ( i = fisrtN; i <= lastN; i++){
    if(i % 2 == 0){
        evencount += 1;
        
    }
    else{

    }
}
console.log("there are",evencount, "even number in your given range");