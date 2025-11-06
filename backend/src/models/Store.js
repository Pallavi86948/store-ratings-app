import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";

const Store = sequelize.define("Store", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING(400),
    allowNull: false,
  },
  avg_rating: {
    type: DataTypes.DECIMAL(3, 2),
    defaultValue: 0.0,
  },
});

User.hasOne(Store, { foreignKey: "owner_id", as: "store" });
Store.belongsTo(User, { foreignKey: "owner_id", as: "owner" });

export default Store;
