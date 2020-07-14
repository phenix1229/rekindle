const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('../config/default.json');
const Library = require('../models/Library');
// const Books = require('../client/src/data/books');


router.get('/', auth, async (req, res) => {
  try {
    
    const books = await Book.find({user: req.user.id}).sort({
      date: -1,
    });
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {name, email, phone, type} = req.body;

    try {
      const newBook = new Book({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const book = await newBook.save();

      res.json(book);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);


router.put('/:id', auth, async (req, res) => {
  const {book} = req.body;

  try {
    let library = await Library.findById(req.params.id);

    if (!library) return res.status(404).json({msg: 'Library not found'});

    // Make sure user owns book
    if (library.owner.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    library = await Library.findByIdAndUpdate(
      req.params.id,
      {bookList: [...bookList, book]}
    );

    res.json(library);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//delete book
router.delete('/:id', auth, async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({msg: 'Book not found'});

    // Make sure user owns book
    if (book.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await Book.findByIdAndRemove(req.params.id);

    res.json({msg: 'Book removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;