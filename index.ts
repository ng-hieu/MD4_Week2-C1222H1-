import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
import mongoose from "mongoose";
const app = express();

const DB_URL = 'mongodb://127.0.0.1:27017/mongoDemo';
mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected Success!'))
    .catch(error => console.log('DB connection error:', error.message));
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/home', router)
app.listen(3000, ()=>{
    console.log('Server 3000 is running')
})