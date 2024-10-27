//console.log("testing for js Connection");

    function doSomething(){
//console.log("Button has been clicked -- msg 1");
//console.log("Button was clicked just now -- msg 2");

var userName = document.getElementById("nameBox").value ;
var userEmail = document.getElementById("emailBox").value;
document.getElementById("showContent").innerHTML = 
`
<br>Thanks for your input <br>
Your Enterned Name: <b> ${userName} </b><br>
Your Entered Email: ${userEmail} <br>
`;

}