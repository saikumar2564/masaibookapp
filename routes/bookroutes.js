const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');


router.post('/add', bookController.addBook);


router.get('/retrieve', bookController.retrieveBooks);


router.delete('/delete/:id', bookController.deleteBook);


router.get('/filter', bookController.filterBooks);


router.get('/sort', bookController.sortBooks);

module.exports = router;