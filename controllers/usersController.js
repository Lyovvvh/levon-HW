import md5 from 'md5'
import jwt from 'jsonwebtoken'
import Users from '../models/Users.js';


export default {
    async registration(req, res) {
        try {
            const {username, password} = req.body;

            const [param1, param2] = await Users.findOrCreate({
                where: {username: username},
                defaults: {
                    username: username,
                    password: md5(md5(password) + process.env.SECRET_FOR_PASSWORD),
                }
            })

            if (!param2) {
                res.json({
                    message: 'User already exists',
                })
            } else {
                res.status(200).send({
                    message: 'User is created successfully',
                    user: param1
                })
            }
        }catch (error) {
            res.status(400).json({
                message: "error",
                error: error
            })
        }
    },
    async login(req, res) {
        try {
            const {username, password} = req.body;

            const user = await Users.findOne({
                where: {username: username, password: md5(md5(password) + process.env.SECRET_FOR_PASSWORD)},
            });

            if (!user) {
                res.status(400).json({
                    message: 'Invalid username or password'
                });
                return;
            }

            const payload = {
                username,
                id: user.id
            }

            const token = jwt.sign(payload, process.env.JWT_SECRET_FOR_TOKEN, {
                expiresIn: '999s'
            })
            console.log(token)
            req.headers.authorization = token;
            res.status(200).json({
                message: 'User is logged in',
                user: user
            })
        }catch (error) {
            res.status(400).json({
                message: 'login failed',
                error: error
            })
        }
    }

}