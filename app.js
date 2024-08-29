import 'dotenv/config';
import './migration.js'
import path from "path";
import express from 'express';

import router from './routers/usersRouter.js';

import sequelize from "./clients/sequelize.mysql.js";

const app = express();


app.set('views', path.resolve('./views'))
app.set('view engine', 'ejs')

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('./views')))



app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
},)
