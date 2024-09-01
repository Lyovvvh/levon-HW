import express from "express";

import validate from "../middlewares/validate.js";
import schema from "../schemas/favoritesSchema.js";
import schemaReviews from "../schemas/reviewsSchema.js";

import controller from "../controllers/favoritesController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router.post('/books', checkToken , validate(schema.checkIdBook,'query'), controller.addToFavorites );
router.get('/users', checkToken , controller.getFavorites );

export default router;