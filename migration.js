import Users from './models/Users.js'

const models = [
    Users,
]

(async () => {
    console.log('migration started')
    for (const model of models) {
        await model.sync({alter: true})
        console.log(model.name ,'success')
    }
    console.log('Migration completed')
})();