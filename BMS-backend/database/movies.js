const mongoose = require("mongoose");

//create book schema
const MoviesShema = mongoose.Schema(
    {
        id: Number,
        image: String,
        title: String,
        acotr: String
    }
);

const MoviesModel = mongoose.model("movies",MoviesShema);

module.exports = MoviesModel;