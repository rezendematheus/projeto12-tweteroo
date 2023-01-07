import express from 'express'
import cors from 'cors'

const server = express();
const PORT = 5000;
server.use(cors())
server.use(express.json())
let users = []
let tweets = []

server.post('/sign-up', (req, res) => {
    const newUser = req.body

    if(!newUser) res.send().statusCode(400)

    const {username, avatar} = newUser

    if(!user || !avatar) res.send().statusCode(400)

    users.push(newUser)
    res.send('OK')
})

server.post('/tweets', (req, res) => {
    const userTweet = req.body
    if(!userTweet) res.send().statusCode(400)
    const {username}
})

server.get('/tweets', (req, res)=>{

})


server.listen(PORT, () => console.log("server rodando"))


