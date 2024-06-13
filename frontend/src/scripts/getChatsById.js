const getChatsById = (chats, userId) => {
  return chats.filter((chat) => chat.userId === userId);
};

export default getChatsById;
