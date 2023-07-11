import app from "./app.js";
import {sequelize} from './database/database.js'

import "./models/Project.js";
import "./models/Task.js";

async function main () {
    try {
        await sequelize.sync();
        console.log('Connection has been established succesfully.')
        app.listen(4000)
        console.log('Server is listening on port', 4000)
    } catch (error) {
        console.log("Unable to connect to the database")
    }
}
main();