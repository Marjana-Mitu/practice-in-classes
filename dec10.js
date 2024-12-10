// function connect(){
//     var searchTerm = document.getElementById("searchBox").value;
//     document.getElementById("searchBox").value ="";
//     var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
//     fetch(url)
//     .then(res => res.json())
//     // .then(data => console.log(data));
//     .then(data => display(data));
// }
// function display(data){
//     var allMeals = data.meals;
//     var oldContent = document.getElementById("displayArea");
//     oldContent.textContent = ""; 
//     for (i=1; i<=allMeals.length; i++) {
//         if( i==5) break;
//         var newDiv = document.createElement("div")  ;
 
//        newDiv.innerHTML = `Meal Title:  ${allMeals[i-1].strMeal}  <br>
//                            <img src="${allMeals[i-1].strMealThumb}">  <br>
//                            Cooking Instructiosn: <br>
//                            ${allMeals[i-1].strInstructions}
//                             <br> <br> <br> `;
//        newDiv.classList.add("innerDivStyle");
//        oldContent.appendChild(newDiv);
//     }

// }


function connect() {
    var searchTerm = document.getElementById("searchBox").value;
    document.getElementById("searchBox").value = "";
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data));
}

function display(data) {
    var allMeals = data.meals;
    var oldContent = document.getElementById("displayArea");
    oldContent.textContent = "";

    // Check if there are results and display the count
    if (allMeals) {
        var totalMeals = allMeals.length;
        var countDisplay = document.createElement("div");
        countDisplay.innerHTML = `Total Search Results: ${totalMeals}`;
        countDisplay.classList.add("countStyle");  // Optional: Add styling class
        oldContent.appendChild(countDisplay);

        // Display up to 4 meals
        for (var i = 1; i <= allMeals.length; i++) {
            if (i == 5) break;
            var newDiv = document.createElement("div");

            newDiv.innerHTML = `Meal Title:  ${allMeals[i - 1].strMeal}  <br>
                                <img src="${allMeals[i - 1].strMealThumb}">  <br>
                                Cooking Instructions: <br>
                                ${allMeals[i - 1].strInstructions}
                                <br> <br> <br>`;
            newDiv.classList.add("innerDivStyle");
            oldContent.appendChild(newDiv);
        }
    } else {
        var noResults = document.createElement("div");
        noResults.innerHTML = "No results found.";
        oldContent.appendChild(noResults);
    }
}
