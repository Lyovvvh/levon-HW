import express from "express";

import usersRouter from "./usersRouter.js";
import booksRouter from "./booksRouter.js";
import reviewsRouter from "./reviewsRouter.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/books", booksRouter);
router.use("/reviews", reviewsRouter);

export default router;