function connect(){
    var url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data));
    }
    function display (data){
        var allMeals = data.meals; 
        console.log(allMeals);
        var oldContent = document.getElementById("displayArea");
        oldContent.textContent="";  
        for (var i=1; i<= allMeals.length; i++){
            var newDiv = document.createElement("div")  ;
            newDiv.innerHTML = `Meal Title:  ${allMeals[i-1].strMeal}  <br>
                           <img src="${allMeals[i-1].strMealThumb}">  <br>
                           Cooking Instructiosn: <br>
                           ${allMeals[i-1].strInstructions}
                            <br> <br> <br> `;
            newDiv.classList.add("innerDivStyle");
            oldContent.appendChild(newDiv);            
    }
}