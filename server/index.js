import express from 'express';
//import bodyParser from 'body-parser'; deprecated, automatically a part of express version 4.16 and higher
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

// TO-DO: link to MongoDB cluster