import express from 'express';
import "dotenv/config";
import cors from 'cors';
import dbConnect from './configs/dbConfig.js';
import BooksRoute from "./routes/books.routes.js"

const app = express();

const PORT = process.env.PORT || 6001;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to Library Management system");
});

app.use((req,res,next)=>{
    console.log(`${req.method}======> URL: ${req.url}`);
});

app.use('/api',BooksRoute);

app.listen(PORT,()=>{
    console.log(`🚀 Server is started on port ${PORT}`);
    dbConnect()
})