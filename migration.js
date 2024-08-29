import Users from './models/Users.js'

const models = [
    Users,
];

(async () => {
    for (const model of models) {
        await model.sync({alter: true})
        console.log("+-+-+-+-+-+-+",model.name.toUpperCase() ,'SUCCESS',"+-+-+-+-+-+-+")
    }

})();