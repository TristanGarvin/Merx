const {gameService} = require('../services/game-post')

const {createGamePost} = gameService

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
  