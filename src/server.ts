import express from 'express'
//import cors from 'cors'
//import {ServerApiVersion} from 'mongodb'
import 'dotenv/config'
import Logger from "./lib/logger";
//import mongoose from 'mongoose'
import morganMiddleware from './config/morganMiddleware'
const app = express()

const port = process.env["PORT"] || 5000

//let NOT = process.env["NOT"];

//app.options('*', cors())
app.use(morganMiddleware)
// work done as middle ware body parser
app.use(express.json())
// for request activity


app.get('/', (req, res) => {
  //   Logger.info("hi"+NOT);
   /* Logger.error("This is an error log");
    Logger.warn("This is a warn log");
    Logger.info("This is a info log");
    Logger.http("This is a http log");
    Logger.debug("This is a debug log");*/
    res.json('hello world')
})

app.listen(port, () => {

    Logger.debug(`Server is up and running @ http://localhost:${port}`);
})
