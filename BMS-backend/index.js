require('dotenv').config()
// const db = require("./database/index1.js");
var cors = require('cors')
var express = require("express");
var app = express();

app.use(express.json());
app.use(cors())

const mongoose = require('mongoose');
const MovieModel = require("./database/movies");
const UsersModel = require("./database/users");
// var mongoDB = "mongodb+srv://rohit_1:KESuc9tHmaRzDfNV@cluster0.zjgeo.mongodb.net/book-company?retryWrites=true&w=majority";
var mongoDB = process.env.mongoDB
mongoose.connect(mongoDB, {useNewUrlparser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"))

// http://localhost:3000/
app.get("/", (req, res) => {
    return res.json({"WELCOME": `to my Backend Software for the BookMyShow `});
});

// http://localhost:3000/Movies
app.get("/movies", async (req, res) => {
    // const getAllBooks = db.books;
    const getAllMovies = await MovieModel.find();
    return res.json(getAllMovies);
});
// http://localhost:3000/Movies/:id
app.get("/movies/:id", async (req, res) => {
    const {id} = req.params        
    const getMovie = await MovieModel.findOne({_id :id});
    return res.json(getMovie);
});


// POSTING DATA INTO MONGO-DB WITH THE HELP OF EXPRESS API BELOW:

app.post("/user-register", async(req, res)=>{
    const addNewuser = await UsersModel.create(req.body);
    return res.json({ UserAdded: addNewuser, message :"new user was added!!!"})
})


app.listen(5000, () => {
    console.log("MY EXPRESS APP IS RUNNING.....")
});