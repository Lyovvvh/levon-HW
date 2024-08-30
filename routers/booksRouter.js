import express from "express";

import validate from "../middlewares/validate.js";
import schema from "../schemas/booksSchema.js";

import controller from "../controllers/booksController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router.post("/add", checkToken ,validate(schema.book,'body'), controller.addBook);
router.get("/get", checkToken ,validate(schema.getBooks, 'query'),  controller.getBooks);

export default router;