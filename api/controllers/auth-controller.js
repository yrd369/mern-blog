import User from "../models/user-model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/errorHandler.js";

// signup
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === "";
  } catch (error) {
    next(error);
  }

  try {
    await User.create({ username, email, password: hashedPassword });
    res.status(200).json({ message: "signup successful" });
  } catch (error) {
    next(error);
  }
};

// signin
export const signIn = (req, res) => {
  const { email, password } = req.body;
  res.json(req.body);
};
