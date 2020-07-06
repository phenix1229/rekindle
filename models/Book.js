const mongoose = require('mongoose');
const BookSchema = mongoose.Schema({
    owner: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Library'
    },
    coverUrl: {
        type: String
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    currentPage: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Book', BookSchema);