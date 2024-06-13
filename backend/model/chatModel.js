const mongoose = require("mongoose");

const chatModel = new mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestChat: {
      type: mongoose.Schema.type.ObjectId,
      ref: "Message",
    },
    groupAdmins: [
      {
        type: mongoose.Schema.type.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);



const Chat = mongoose.model("tbl_chats", chatModel);

module.exports = Chat;
