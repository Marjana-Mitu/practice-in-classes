// console.log("welcome to javascript");
// console.log("today is oct22nd");

// var name1 = "ABC Ahmed" ;
// name1 = "pqr islam";
// name1 = "xyz khan";
// console.log (name1);
// console.log("this username in this case is", name1);

// var totalMarks = 85;
// var cgpa = 3.23;
// var isRaining = false;
// var haveUmbrella = true;

// var haveFever = "false";




// var studentName = prompt("Enter your Name");
// var totalMark = prompt ("enter your total marks");

// console.log("welcome", studentName, "it's nice to know that ypu have obtained", totalMark, "marks");

var studentName = prompt ("Please Enter Your Name");
var quiz1 =parseInt(prompt ("Please enter your Quiz 1 Marks "));
var quiz2 = parseInt(prompt ("Please Enter your Quiz 2 marks"));
var midTerm = parseFloat(prompt ("Please provide your midterm marks"));

var totalMarks = (quiz1 + quiz2 + midTerm);

console.log("Dear", studentName, "you have obtained", totalMarks, "marks");
document.getElementById("totalBox").value = total;
document.getElementById("displayArea").innerText = total;
 