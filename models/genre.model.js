const mongoose = require('mongoose');
const genreSchema = new mongoose.Schema({
    genreId :{
        type:Number,
        requried:true

    },
    genre:{
        type:String,
        requried: true
    }
});


const Genre = mongoose.model('genre',genreSchema);
module.exports = Genre;
