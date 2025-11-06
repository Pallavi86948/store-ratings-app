import db from "../models/index.js";

const { User, Store, Rating } = db;

export const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.count();
    const totalStores = await Store.count();
    const totalRatings = await Rating.count();
    res.json({ totalUsers, totalStores, totalRatings });
  } catch (err) {
    res.status(500).json({ message: "Error fetching dashboard" });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, email, address, password, role } = req.body;
    const bcrypt = await import("bcryptjs");
    const hashed = await bcrypt.default.hash(password, 10);
    const user = await User.create({ name, email, address, password_hash: hashed, role });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Error adding user", error: err.message });
  }
};

export const addStore = async (req, res) => {
  try {
    const { name, email, address, ownerId } = req.body;
    const store = await Store.create({ name, email, address, owner_id: ownerId });
    res.status(201).json(store);
  } catch (err) {
    res.status(500).json({ message: "Error adding store", error: err.message });
  }
};
