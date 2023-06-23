"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//import {ServerApiVersion} from 'mongodb'
require("dotenv/config");
const morgan_1 = __importDefault(require("morgan"));
//import mongoose from 'mongoose'
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.options('*', (0, cors_1.default)());
// work done as middle ware body parser
app.use(express_1.default.json());
// for request activity
app.use((0, morgan_1.default)('dev'));
app.get('/', (req, res) => {
    res.json('hello world');
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
