const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');
const Library = require('../models/Library');



router.get('/', auth, async (req, res) => {
  try {
    const library = await Library.find({owner: req.user.id})
    res.json(library[0]);
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


router.put('/add/:id', auth, async (req, res) => {
  const {book} = req.body;

  try {
    let library = await Library.findById(req.params.id);

    if (!library) return res.status(404).json({msg: 'Library not found'});

    library = await Library.findByIdAndUpdate(
      req.params.id,
      {bookList: [...library.bookList, book]},
    );

    res.json(library);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/remove/:id', auth, async (req, res) => {
  const {book} = req.body;
  console.log(book)

  try {
    let library = await Library.findById(req.params.id);

    if (!library) return res.status(404).json({msg: 'Library not found'});

    library = await Library.findByIdAndUpdate(
      req.params.id,
      {bookList: library.bookList.filter(bk => bk !== book)},
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