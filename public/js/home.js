// const axios = require("axios");
const apiUrl = "https://www.speedrun.com/api/v1/games?name=";
// const categoryQuery = $('#category-search').val();
const gameName = $('#gameName');
const gameImage = $('#gameImg');

$("#search-form").on("submit", getGameData);

function getGameData(e) {
    e.preventDefault()

    const gameQuery = $("#game-search").val();
    $.get(apiUrl + gameQuery)
        .then(function (response) {
            console.log(response)
            const game = response.data[0];
            const poster = game.assets['cover-large'].uri;
            
            // gameName.innerHTML = response.data.games[0].name;
            // gameImage.src = response.data.poster.medium-cover;

            $.get(`https://www.speedrun.com/api/v1/games/${game.id}/categories`)
                .then(function (categoryData) {
                    const category = categoryData.data[0];

                    gameName.html(`${game.names.international} (${category.name})`);
                    gameImage.src(poster);

                    // $.get(category.links.find(link => link.rel === 'leaderboard'))
                    //     .then()
                });
        })
        .catch(function (error) {
            gameName.innerHTML = "(An error has occurred.)";
            gameImage.src = "";
        });
}

// var button = document.querySelector(".search-button");
// button.addEventListener("click", getGameData);




