import express from "express";

import validate from "../middlewares/validate.js";
import schema from "../schemas/reviewsSchema.js";

import controller from "../controllers/reviewsController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router.post("/create", checkToken ,validate(schema.checkBookId, 'query'),validate(schema.createReview,'body'),controller.createReview);

export default router;