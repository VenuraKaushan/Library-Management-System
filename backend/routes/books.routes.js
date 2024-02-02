import express from 'express';
import { 
    getAllBooks,
    addBook,
    getSpecificBook,
    updateBook,
    deleteBook
} from '../controllers/books.controller.js';

const router = express.Router();

router.route("/books").get(getAllBooks).post(addBook);
router.route("/books/:id").get(getSpecificBook).put(updateBook).delete(deleteBook);

export default router;