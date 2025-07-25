import FriendRequest from "../models/friendRequest.js";
import User from "../models/user.js";

export async function getRecommendedUsers(req, res) {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user;

    const recommendedUsers = await User.find({
      $and: [
        { _id: { $ne: currentUserId } }, // exclude current user
        { _id: { $nin: currentUser.friends } }, //exclude current users friends
        { isOnboarded: true },
      ],
    });
    console.log(recommendedUsers);
    res.status(200).json(recommendedUsers);
  } catch (error) {
    console.error("Error fetching recommended users: ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export async function getFriends(req, res) {
  try {
    const user = await User.findById(req.user.id)
      .select("friends")
      .populate(
        "friends",
        "fullName profilePic nativeLanguage learningLanguage location bio"
      );
    res.status(200).json(user.friends);
  } catch (error) {
    console.error("Error fetching friends: ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export async function sendFriendRequest(req, res) {
  try {
    const myId = req.user.id;
    const { id: recipientId } = req.params;

    // prevent sending req to self
    if (myId == recipientId) {
      return res.status(400).json({
        message: "Cannot send request to yourself",
      });
    }


    const recipient = await User.findById(recipientId);
    if (!recipient) {
      return res.status(404).json({
        message: "Recipient not found",
      });
    }

    // check if user is already friends
    if (recipient.friends.includes(myId)) {
      return res.status(400).json({
        message: "Already friends with this user",
      });
    }

    // check if req already sent
    const existingRequest = await FriendRequest.findOne({
      $or: [
        { sender: myId, recipient: recipientId },
        { sender: recipientId, recipient: myId },
      ],
    });

    if (existingRequest) {
      return res.status(400).json({
        message: "Friend Request already sent",
      });
    }

    const friendRequest = await FriendRequest.create({
      sender: myId,
      recipient: recipientId,
    });

    res.status(201).json(friendRequest);
  } catch (error) {
    console.error("Error fetching recommended users: ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export async function acceptFriendRequest(req, res) {
  try {
    const { id: requestId } = req.params;

    const friendRequest = await FriendRequest.findById(requestId);

    if (!friendRequest) {
      return res.status(404).json({
        message: "friend request not found",
      });
    }

    if (friendRequest.recipient.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not authorized to accept this request",
      });
    }

    //  add to friends list
    friendRequest.status = "accepted";
    await friendRequest.save();

    // add each user to each others friends list
    await User.findByIdAndUpdate(friendRequest.sender, {
      $addToSet: { friends: friendRequest.recipient },
    });

    await User.findByIdAndUpdate(friendRequest.recipient, {
      $addToSet: { friends: friendRequest.sender },
    });

    res.status(200).json({ message: "Friend request accepted" });
  } catch (error) {
    console.error("Error in accepting friend request: ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export async function getFriendRequests(req, res) {
  try {
    const incomingRequests = await FriendRequest.find({
      recipient: req.user.id,
      status: "pending",
    }).populate(
      "sender",
      "fullName profilePic nativeLanguage learningLanguage"
    );

    const acceptedRequests = await FriendRequest.find({
      sender: req.user.id,
      status: "accepted",
    }).populate("recipient", "fullName profilePic");

    res.status(200).json({ incomingRequests, acceptedRequests });
  } catch (error) {
    console.error("Error in getting pending friend requests: ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export async function getOutgoingFriendReq(req, res) {
  try {
    const outgoingReq = await FriendRequest.find({
      sender: req.user.id,
      status: "pending",
    }).populate(
      "recipient",
      "fullName  profilePic nativeLanguage learningLanguage"
    );

    res.status(200).json(outgoingReq);
  } catch (error) {
    console.error("Error fetching outgoing requests: ", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
