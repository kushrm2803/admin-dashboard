import User from "../models/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User not found");

    if (password !== user.password)
      return res.status(400).send("Invalid credentials");

    res.status(200).json({ message: "Login successful", currentuserId: user._id });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
