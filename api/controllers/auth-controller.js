import User from "../models/user-model.js";
import bcrypt from "bcryptjs";

// signup
export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    await User.create({ username, email, password: hashedPassword });
    res.status(200).json({ message: "signup successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// signin
export const signIn = (req, res) => {
  const { email, password } = req.body;
  res.json(req.body);
};
