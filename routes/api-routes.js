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




// const express = require("express");
// const app = express();

// app.use(express.json())

// const getGames = async () => {
//     return await axios({
//         url: "https://www.speedrun.com/api/v1/games/"
//     })
// }
// (async () => {
//     const games = await getGames()
//     console.log(`Games: ${Object.entries(games.data.games.id).length}`)
// })()

// const getRuns = async () => {
//     return await axios({
//         url: "https://www.speedrun.com/api/v1/runs/"
//     })
// }
// (async () => {
//     const runs = await getRuns()
//     console.log(`Runs: ${Object.entries(runs.data.games.id).length}`)
// })()
// app.post("/home", (req, res) => {
//     const name = req.body.name
//     console.log(`Got ${name}`)
// })

// const server = app.listen(8080, () => {
//     console.log("listening on port %s", server.address().port)

//     ;(async () =>{
//         axios.post('https://', {
//             name: 'Ted'
//         })
//     })()
// })
