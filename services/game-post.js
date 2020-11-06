const { gamepostDb } = require('../db')

// additional endpoints here
const createGamepost = async (user, content) => {
  try {
    return await gamepostDb(user, content)
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  createGamepost
}
