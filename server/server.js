import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './db/db.js';
import movieRouter from './routes/movieRouter.js';
// App Scafholding

const app = express();

app.config= {
    port: 5000
};

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());



// database connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Routes

app.get('/', (req,res)=>{
    res.send('App is runing!');
});
app.use('/api', movieRouter)


// listener
app.listen(app.config.port, ()=>{
    console.log(`server : http://server:${app.config.port}`);
})
