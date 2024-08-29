import Users from './models/Users.js'
import Books from "./models/Books.js";

const models = [
    Users,
    Books
];

(async () => {
    for (const model of models) {
        await model.sync({alter: true})
        console.log("+-+-+-+-+-+-+",model.name.toUpperCase() ,'SUCCESS',"+-+-+-+-+-+-+")
    }

})();