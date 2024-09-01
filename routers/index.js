import express from "express";

import usersRouter from "./usersRouter.js";
import booksRouter from "./booksRouter.js";
import reviewsRouter from "./reviewsRouter.js";
import favoritesRouter from "./favoritesRouter.js";
import commentsRouter from "./commentsRouter.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/books", booksRouter);
router.use("/reviews", reviewsRouter);
router.use("/favorites", favoritesRouter);
router.use("/comments", commentsRouter);

export default router;