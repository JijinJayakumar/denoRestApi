import db from "../config/database.js";
import User from "./User.ts";

db.link([User]);

export { db, User };
