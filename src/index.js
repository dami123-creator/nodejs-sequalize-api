import app from "./app.js";
import {sequelize} from './database/database.js'


async function main () {
    try {
        await sequelize.sync({force: false});
        console.log('Connection has been established succesfully.')
        app.listen(3001)
        console.log('Server is listening on port', 3001)
    } catch (error) {
        console.log("Unable to connect to the database")
    }
}
main();