import { generateStreamToken } from "../config/stream.js";

export async function getStreamToken(req, res) {
  try {
    const token = generateStreamToken(req.user.id);

    res.status(200).json({ token });
  } catch (error) {
    console.log("error in getting stream token : ", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
