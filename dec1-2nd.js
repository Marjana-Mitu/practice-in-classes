function connect() {
    var url = `https://randomuser.me/api/`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data));  
}

function display(data) {
    var allUsers = data.results;
    console.log(allUsers);
    var oldContent = document.getElementById("displayArea");
    oldContent.textContent = ""; 

    for (var i = 0; i < allUsers.length; i++) {
        var newDiv = document.createElement("div");

        newDiv.innerHTML = `Name:  ${allUsers[i].name.first} ${allUsers[i].name.last}  <br>
                            Gender: ${allUsers[i].gender} <br>
                            <img src="${allUsers[i].picture.large}">  <br>
                            Location: ${allUsers[i].location.city}, ${allUsers[i].location.country}
                            <br> <br> <br>`;
        newDiv.classList.add("innerDivStyle");
        oldContent.appendChild(newDiv);
    }
}
