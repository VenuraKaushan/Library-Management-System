import express from 'express';
import "dotenv/config";
import cors from 'cors';
import dbConnect from './configs/dbConfig.js';
import BooksRoute from "./routes/books.routes.js"

const app = express();

const PORT = process.env.PORT || 6000;

app.use(cors({origin : ["http://localhost:3000"],credentials : true}));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send("Welcome to Library Management system");
});

app.use((req,res,next)=>{
    console.log(`${req.method} ======> ${req.url}`);
    next();
});


app.use('/api',BooksRoute);

app.listen(PORT,()=>{
    console.log(`🚀 Server is started on port ${PORT}`);
    dbConnect()

})