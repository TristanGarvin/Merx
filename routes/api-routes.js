const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const axios = require("axios");
const apiUrl = "https://www.speedrun.com/api/v1/games?name=";
const input = document.querySelector(".game-input");
const gameName = document.querySelector(".game-name");
const gameImage = document.querySelector(".game-image");
const {gameService} = require('../services/game-post')
const {createGamePost} = gameService


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'))

app.use('/api', routes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
  app
}


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




const postGamePost = async (req, res, next) => {
    const {user, content} = req.body
    try {
      await createGamePost(user, content)
    //  service calls
      res.sendStatus(201)
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
  }
  
  module.exports = {
    postGamePost
  }
  

