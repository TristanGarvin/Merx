// const axios = require("axios");
const apiUrl = "https://www.speedrun.com/api/v1/games?name=";
const input = $(".game-search").val();
const gameName = document.querySelector(".game-name");
const gameImage = document.querySelector(".game-image");

$("#search-form").on("submit", getGameData)
function getGameData(e) {
    e.preventDefault()
    console.log("searching")
    $.get(apiUrl + input)
        .then(function (response) {
            console.log(response)
            // gameName.innerHTML = response.data.games[0].name;
            // gameImage.src = response.data.poster.medium-cover;
        })
        .catch(function (error) {
            gameName.innerHTML = "(An error has occurred.)";
            gameImage.src = "";
        });
}

// var button = document.querySelector(".search-button");
// button.addEventListener("click", getGameData);




