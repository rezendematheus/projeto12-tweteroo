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

    if(!username || !avatar) res.send().statusCode(400)

    users.push(newUser)
    res.send('OK')
})

server.post('/tweets', (req, res) => {

    const userTweet = req.body
    if(!userTweet) res.send().statusCode(400)

    const {username, tweet} = userTweet
    if(!users.find(e => e.username === username)) res.send("UNAUTHORIZED")

    tweets.push(userTweet)
    res.send('OK')
})

server.get('/tweets', (req, res)=>{
    const latestTweets = []
    for(let i = tweets.length-1; i > tweets.length - 11; i--){
        if(!tweets[i]) break
        latestTweets.push({...tweets[i], avatar: users.find(e => e.username === tweets[i].username).avatar})
    } 
    res.send(latestTweets).statusCode('OK')
})


server.listen(PORT, () => console.log("server rodando"))


