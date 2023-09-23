const Book = require('../models/book');


const addBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const retrieveBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const filterBooks = async (req, res) => {
  const { genre } = req.query;
  try {
    const filteredBooks = await Book.find({ genre });
    res.json(filteredBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const sortBooks = async (req, res) => {
  const { sortBy } = req.query;
  try {
    const sortedBooks = await Book.find().sort({ title: sortBy });
    res.json(sortedBooks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBook,
  retrieveBooks,
  deleteBook,
  filterBooks,
  sortBooks,
};