function process() {
    var Courses = parseInt(document.getElementById("coursesBox").value);
    var coursesFees = parseInt(document.getElementById("feesBox").value);
    var totalFees = Courses * coursesFees;
    var scholarship ;
    var payable ;
    if(totalFees > 50000) {
        scholarship = totalFees * .22;
        payable = totalFees - scholarship;
    }
    else {
        scholarship = 0;
        payable = totalFees;
    }

    document.getElementById("discountBox").value = scholarship;
    document.getElementById("resultBox").value = payable;

}