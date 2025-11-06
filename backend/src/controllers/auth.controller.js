import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import db from "../models/index.js";
import { validateEmail, validatePassword, validateName } from "../utils/validators.js";

dotenv.config();
const { User } = db;

export const signup = async (req, res) => {
  try {
    const { name, email, address, password } = req.body;
    if (!validateEmail(email)) return res.status(400).json({ message: "Invalid email" });
    if (!validatePassword(password)) return res.status(400).json({ message: "Weak password" });
    if (!validateName(name)) return res.status(400).json({ message: "Name length invalid" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, address, password_hash: hashed, role: "USER" });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Error signing up", error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
};
