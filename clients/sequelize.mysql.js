import {Sequelize} from 'sequelize';

const {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
} = process.env;

const dbConfig = {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false,
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, dbConfig);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('connection has been established successfully.');
    }catch(err) {
        console.log('Unable to connect to the database.',err);
    }
})();



export default sequelize;