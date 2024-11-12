// var initialScore = 16;
// var initialOver = 5;
// var fixedScore = 10;
// var targetrunRate = 6.5;
// var totalRUn;
// var totalOver = 20;
// var overAdd;
// var runrate;

// for(overAdd =1, overAdd<=20, overAdd++) {
//     totalRUn = initialScore + (fixedScore*overAdd);
//     totalOver = initialOver + overAdd;
//     runrate = totalRUn / totalOver ;
// if(runrate > targetrunRate){
//     break;
// }

// console.log("after", overAdd, "the runrate will exceed 6.5");
// }

// var initialScore = 16;
// var initialOver = 5;
// var fixedScore = 10;
// var targetRunRate = 6.5;
// var totalRun;
// var totalOver = initialOver;
// var overAdd;
// var runRate;

// for (overAdd = 1; overAdd <= 20; overAdd++) {
//     totalRun = initialScore + (fixedScore * overAdd);
//     totalOver = initialOver + overAdd;
//     runRate = totalRun / totalOver;

//     if (runRate > targetRunRate) {
//         console.log("After", overAdd, "overs, the run rate will exceed", targetRunRate);
//         break; 
//     }
    
// }

// var birthyear = parseInt(prompt("Enter your Birthyear"));
// var currentyear = 2024 ;
// var yearcount;
// var voucherammount = 5000 ;
// var totalvoucher;

// for(i=birthyear, i<=currentyear, i++) {
//     if (i %4 == 0){
//         yearcount++;
//     }
// console.log("the leap years from your birthyear to 2024 are:", yearcount);
// }
//  totalvoucher = voucherammount*yearcount;
//  console.log("yoy will get",totalvoucher,"from aarong");



 var birthyear = parseInt(prompt("Enter your Birthyear"));
 var currentyear = 2024;
 var yearcount = 0;
 var voucherammount = 5000;
 var totalvoucher = 0;
 
 for (i = birthyear; i <= currentyear; i++) {
     if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
         yearcount++;
         console.log("Leap year:", i);
     }
 }
 
 totalvoucher = voucherammount * yearcount;
 
 console.log("Total number of leap years:", yearcount);
 console.log("You will get a total of", totalvoucher, "from Aarong.");
 












