import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('Projectsdb', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres'
})