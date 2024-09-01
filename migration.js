import Users from './models/Users.js'
import Books from "./models/Books.js";
import Reviews from "./models/Reviews.js";
import Favorites from "./models/Favorites.js";
import Comments from "./models/Comments.js";

const models = [
    Users,
    Books,
    Reviews,
    Favorites,
    Comments,
];

(async () => {
    for (const model of models) {
        await model.sync({alter: true})
        console.log("+-+-+-+-+-+-+",model.name.toUpperCase() ,'SUCCESS',"+-+-+-+-+-+-+")
    }

})();