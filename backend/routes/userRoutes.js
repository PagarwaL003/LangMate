import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  acceptFriendRequest,
  getFriendRequests,
  getFriends,
  getOutgoingFriendReq,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/userController.js";

const router = express.Router();

// apply middleware to protect all routes in this router
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getFriends);

router.post("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReq);

export default router;
