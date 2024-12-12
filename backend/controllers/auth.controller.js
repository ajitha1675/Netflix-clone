import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export async function signup(req, res) {
  try {
    const { email, password, username } = req.body;

    // Validation checks
    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters"
      });
    }

    // Check if email or username already exists
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });
    }

    const existingUserByName = await User.findOne({ username });
    if (existingUserByName) {
      return res.status(400).json({
        success: false,
        message: "Username already exists"
      });
    }

    // Generate salt and hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Select random profile picture
    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      username,
      image
    });

    // Save the new user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: ""
      }
    });

  } catch (error) {
    console.error("Error in signup controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function login(req, res) {
  res.send("Login route");
}

export async function logout(req, res) {
  res.send("Logout route");
}
