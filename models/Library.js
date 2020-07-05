const mongoose = require('mongoose');
const LibrarySchema = mongoose.Schema({
    owner: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User'
    },
    bookList: {
        type: Array
    },
    currentBook: {
        type: String
    }
})

module.exports = mongoose.model('Library', LibrarySchema);