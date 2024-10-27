function doSomething() {
    var userCourses = parseInt(document.getElementById("courses").value);
    var coursesFees = parseFloat(document.getElementById("fees").value);
    var totalFees = userCourses * coursesFees;

    document.getElementById("showContent").innerHTML =
    `
    Thank you for your input <br>
    Your total semester fee is ${totalFees}
    `;
}