import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  try {
    //db opes
    const { username, email, password } = req.body;

    //   hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    //   CREATE A NEW USER AND SAVE TO DB

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to created user" });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // CHECK IF THE USER EXITS
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // CHECK IF THE PASSWORD IS CORRECT

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid credentials" });

    // GENERATE COOKIE TOKEN AND SEND TO THE USER

    // res.setHeader("Set-Cookie", "test=" + "myValue").json("success login");
    const age = 1000 * 60 * 60 * 24 * 7; // 7 days

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );
    console.log(token);
    res.cookie("access_token", token, {
      httpOnly: true,
      // secure: true,
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure: true,
        maxAge: age,
      })
      .status(200)
      .json({ message: "Login successful" });
  } catch (err) {
    console.log(first);
    res.status(500).json({ message: "failed to Login!" });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "logout successful" });
};
