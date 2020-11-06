const axios = require("axios");
var apiUrl = "https://www.speedrun.com/api/v1/games?name=";
var input = document.querySelector(".game-input");
var gameName = document.querySelector(".game-name");
var gameImage = document.querySelector(".game-image");


function getGameData() {
    axios.get(apiUrl + input.value)
        .then(function (response) {
            gameName.innerHTML = response.data.forms[0].name;
            gameImage.src = response.data.sprites.front_default;
        })
        .catch(function (error) {
            gameName.innerHTML = "(An error has occurred.)";
            gameImage.src = "";
        });
}

var button = document.querySelector(".game-button");
button.addEventListener("click", getGameData);


