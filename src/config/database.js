import { Database } from "../../packages.ts";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } from "../../env.js";

const db = new Database("mysql", {
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
});

export default db;
