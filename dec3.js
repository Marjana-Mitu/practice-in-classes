function api(){
    var key = "90c83bb349204a5e98535539240312";
    var url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=Dhaka&days=3&aqi=no&alerts=no`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data));
}

function display(data){
    var results = data.current;  
    console.log(results);

    newDiv.innerHTML = `
        Weather condition: ${results.condition.text} <br>
        Temperature: ${results.temp_c} °C <br>
        <img src="http:${results.condition.icon}" alt="Weather Icon"> <br>
        <br><br><br>
    `;
    newDiv.classList.add("innerDivStyle");
    oldContent.appendChild(newDiv);
}
