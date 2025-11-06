import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";
import Store from "./Store.js";

const Rating = sequelize.define("Rating", {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
});

User.belongsToMany(Store, { through: Rating, foreignKey: "user_id" });
Store.belongsToMany(User, { through: Rating, foreignKey: "store_id" });

export default Rating;
