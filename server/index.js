import express from 'express';
//import bodyParser from 'body-parser'; deprecated, automatically a part of express version 4.16 and higher
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

// TO-DO: convert to environmental variable
const CONNECTION_URL = "mongodb+srv://MERNTestUser1:MERNTestUser-48@cluster0.sk3kn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => console.log("Server running on port: ", PORT)))
    .catch((error)=> console.log(error.message));

mongoose.set("useFindAndModify", false);