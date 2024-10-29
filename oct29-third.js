function gradings(){
    var Marks = parseInt(document.getElementById("totalMarks").value);
if (Marks >= 90) {

    console.log("Your Grade is A");
}
else if(Marks >= 85) {
    console.log("Your Grade is A-");

}
else if(Marks >= 80) {
    console.log("Your Grade is B+");

}
else if(Marks >= 75) {
    console.log("Your Grade is B");

}
else if(Marks >= 70) {
    console.log("Your Grade is B-");

}
else if(Marks >= 65) {
    console.log("Your Grade is C+");

}
else if(Marks >= 60) {
    console.log("Your Grade is C");

}
else if(Marks >= 55) {
    console.log("Your Grade is C-");

}
else if(Marks >= 50) {
    console.log("Your Grade is D+");

}
else if(Marks >= 45) {
    console.log("Your Grade is D");

}

else {
    console.log("Your Grade is F")
}
}
