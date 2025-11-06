import bcrypt from "bcryptjs";
import db from "../models/index.js";

const { User, Store } = db;

(async () => {
  await db.sequelize.sync({ force: true });

  const adminPass = await bcrypt.hash("Admin@123", 10);
  const ownerPass = await bcrypt.hash("Owner@123", 10);
  const userPass = await bcrypt.hash("User@123", 10);

  await User.bulkCreate([
    { name: "System Administrator", email: "admin@store.com", address: "HQ", password_hash: adminPass, role: "ADMIN" },
    { name: "John Doe", email: "user@store.com", address: "Mumbai", password_hash: userPass, role: "USER" },
    { name: "Store Owner", email: "owner@store.com", address: "Pune", password_hash: ownerPass, role: "OWNER" },
  ]);

  await Store.create({
    name: "GreenMart Store",
    email: "greenmart@store.com",
    address: "Pune, India",
    owner_id: 3,
  });

  console.log("Seed completed...");
  process.exit(0);
})();
