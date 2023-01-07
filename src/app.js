import express from 'express'
import cors from 'cors'

const server = express();
const PORT = 5000;
server.use(cors())







server.lister(PORT, () => console.log("server rodando"))


