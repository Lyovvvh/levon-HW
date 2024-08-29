import jwt from 'jsonwebtoken';

const { JWT_SECRET_FOR_TOKEN } = process.env;

export default async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token not found' });
    }

    try {

        const decryptDate = jwt.verify(token, JWT_SECRET_FOR_TOKEN);

        req.user = decryptDate;

        next()
    }catch (error) {
        console.log(error.message)
        res.status(501).json({ message: error.message });
        return;
    }
}