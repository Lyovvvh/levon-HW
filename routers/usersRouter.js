import express from "express";

import validate from "../middlewares/validate.js";
import schema from "../schemas/usersSchema.js";

import controller from "../controllers/usersController.js";

const router = express.Router();



export default router;