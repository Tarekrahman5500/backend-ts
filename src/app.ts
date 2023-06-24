import express from 'express'
import 'dotenv/config'
import morganMiddleware from './config/morganMiddleware'
import NoteModel from './models/notes'
import {ErrorException} from "./error-handler/errorException";
import {ErrorCode} from "./error-handler/errorCode";
import catchAsyncErrors from "./error-handler/catchAsyncError";

const app = express()

//app.options('*', cors())
app.use(morganMiddleware)
// work done as middle ware body parser
app.use(express.json())
// for request activity

//app.use(catchAsyncErrors)

app.get('/:id', catchAsyncErrors(async (req, res) => {
    //   Logger.info("hi"+NOT);
    /* Logger.error("This is an error log");
     Logger.warn("This is a warn log");
     Logger.info("This is a info log");
     Logger.http("This is a http log");
     Logger.debug("This is a debug log");*/
    // throw new Error("hi")
    // return  next(new ErrorException(ErrorCode.Unauthenticated))
     const notes = await NoteModel.findById(req.params.id).exec()
    return res.status(200).json({notes})
}))

app.post('/', catchAsyncErrors(async (req, res) => {

    let note = new NoteModel({
        title: req.body.title,
        text: req.body.text
    })

    note = await note.save()
    return res.status(200).json({note})
}))

export default app
