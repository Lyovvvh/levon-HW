import Books from '../models/Books.js';
import Users from "../models/Users.js";

export default {
    async addBook(req, res) {
        try {
            const {title, author} = req.body;
            const {id} = req.user;
            console.log(req.user)

            const [param1, param2] = await Books.findOrCreate({
                where: {title: title},
                defaults: {
                    title: title,
                    author: author,
                    userId: id,
                }
            })

            if (!param2) {
                res.json({
                    message: 'Book is find',
                    user: param1
                })
            } else {
                res.status(200).send({
                    message: 'Book is add successfully',
                    user: param1
                })
            }
        } catch (err) {
            res.status(400).json({
                message: "book already exists",
                error: err
            })
        }
    },
    async getBooks(req, res) {
        try {
            const total = await Books.count();


            let page = +req.query.page;
            let limit = +req.query.limit;
            let offset = (page - 1) * limit;

            const maxPageCount = Math.ceil(total /  limit);

            if (page > maxPageCount) {
                res.status(400).json({
                    message: 'Book does not exist',
                });
                return
            }

            const booksList = await Books.findAll({
                limit,
                offset,
                include: Users,
            })

            if (booksList.length === 0) {
                res.status(404).json({message: 'Books not found'})
                return
            }
            res.status(200).json({
                books: booksList
            })
        } catch (error) {
            res.status(400).json({
                message: error,
            })
        }

    }
}