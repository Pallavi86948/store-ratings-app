import sequelize from "../config/db.js";
import User from "./User.js";
import Store from "./Store.js";
import Rating from "./Rating.js";

const db = { sequelize, User, Store, Rating };

export default db;
