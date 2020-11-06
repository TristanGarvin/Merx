const axios = require("axios");
// const express = require("express");
// const app = express();

// app.use(express.json())

const getRuns= async () => {
    return await axios({
        url: "https://www.speedrun.com/api/v1"
    })
}
(async() => {
    const runs = await getRuns()
    console.log(`runs: ${Object.entries(runs.data.links.uri).length}`)
})()



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



