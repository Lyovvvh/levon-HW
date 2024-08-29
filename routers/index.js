import express from "express";

import usersRouter from "./usersRouter.js";
import booksRouter from "./booksRouter.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/books", booksRouter);

export default router;