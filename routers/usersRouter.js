import express from "express";

import validate from "../middlewares/validate.js";
import schema from "../schemas/usersSchema.js";

import controller from "../controllers/usersController.js";
import checkToken from "../middlewares/checkToken.js";

const router = express.Router();

router.post("/registration", validate(schema.registration,'body'), await controller.registration);

router.post("/login", validate(schema.login,'body'), await controller.login);

router.get("/profile", checkToken, (req, res)=>{
    res.status(200).json({
        user: req.user,
    })
});

export default router;