function connect() {
    var searchTerm = document.getElementById("searchBox").value;
    document.getElementById("searchBox").value = "";
    var url = `https://restcountries.com/v3.1/name/${searchTerm}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data));
}

// function display(data) { 
//     console.log(data);
//     var oldContent = document.getElementById("displayArea");
//     oldContent.textContent = "";

//     for (i = 0; i < data.length; i++) {
//         var country = data[i];
//         var newDiv = document.createElement("div");
//         newDiv.innerHTML = `
//             Name: ${country.name.common} <br>
//             <img src="${country.flags.png}"> <br>
//             Region: ${country.region} <br>
//             Population:${country.population} <br>
//             Languages: ${country.languages}<br>
//             Currencies:${country.currencies} <br>
//         `;
//         newDiv.classList.add("innerDivStyle");
//         oldContent.appendChild(newDiv);
//     }
// }
function display(data) { 
    console.log(data);
    var oldContent = document.getElementById("displayArea");
    oldContent.textContent = "";

    for (let i = 0; i < data.length; i++) {
        var country = data[i];
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <h2>Name: ${country.name.common}</h2>
            <div><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</div>
            <div><strong>Region:</strong> ${country.region}</div>
            <div><strong>Subregion:</strong> ${country.subregion}</div>
            <div><strong>Population:</strong> ${country.population.toLocaleString()}</div>
            <div><strong>Languages:</strong> ${country.languages ? Object.values(country.languages).join(", ") : "N/A"}</div>
            <div><strong>Currencies:</strong> ${country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(", ") : "N/A"}</div>
            <div><strong>Flag:</strong><br> <img src="${country.flags.png}" alt="${country.name.common} Flag" style="width: 150px;"></div>
            <br><br>
        `;
        newDiv.classList.add("innerDivStyle");
        oldContent.appendChild(newDiv);
    }
}

