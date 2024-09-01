import express from "express";

import validate from "../middlewares/validate.js";
import schema from "../schemas/commentsSchema.js";

import controller from "../controllers/commentsController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router.post('/reviews',checkToken,validate(schema.checkIdReview,'query'),validate(schema.checkComment, 'body'), controller.addComments);
router.get('/reviews',checkToken,validate(schema.checkIdReview,'query'), controller.getComments);

export default router;