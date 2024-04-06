import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    req.user = user;
    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log("Error is signupUser:", err.message);
  }
};

export default protectRoute;
