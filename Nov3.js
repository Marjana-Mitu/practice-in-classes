function calculation() {
    var credits = parseInt(document.getElementById("Creditsbox").value);
    var Majors = parseInt(document.getElementById("Majorcourses").value);
    var rewards ;
    var vat ;
    var payable;
    var names = document.getElementById ("Namebox").value;


    if (credits <= 100 && Majors > 5) {
        rewards = 5000 ;
        payable = rewards * .15;
        
    }
    else if (credits <= 80 && Majors > 3){
        rewards = 3000 ;
        payable = rewards * .15;
    }

    else {
        rewards = 2000;
        payable = rewards * .15; 
    }

    document.getElementById("showContent").innerHTML =
    `
    Thank you for your input, ${names}  <br>
    Your total semester fee is ${payable}
    `;

}