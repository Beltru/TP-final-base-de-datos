import pg from 'pg';
import "dotenv/config";

const { Pool } = pg;

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: true
});

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "postgres://BurgerTIC_owner:dzCWjRN6IQE9@ep-lingering-bread-a5h944uu.us-east-2.aws.neon.tech:5432/BurgerTIC?sslmode=require"
);

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
