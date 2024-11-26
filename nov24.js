function connect(){
    var url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then (res => res.json())
    // .then (data => console.log(data));
    .then(data => process(data));
}
function process(data){
    console.log(data);

// for (var i=1; i<=data.lenth; i++){
//     console.log("user # ", i, "details-");
//     console.log(data[i-1].name);
//     console.log(data[i-1].username);
//     console.log(data[i-1].email);
// }
}









// // array type of Variables
// var marks = [5, 11, 23, 25, 68];
// console.log(marks.length);
// console.log(marks[3]);

// // Object type of variables
// var Student1 = {name:"MNE", id: 21109871, dept: "MIS", bloodGroup:"O+", quizMarks: [12,13,15], phUsed:"Honor"
// };
// console.log("marks obtained in second quiz is-", Student1.quizMarks[1]);


// var sum = 0;
// var numbers = [432, 545, 234, 654, 234, 600];
// for(i=0; i<numbers.length; i++){
//     sum+= numbers[i];
// }
// console.log("sum of the given numbers from the array:", sum);

// //