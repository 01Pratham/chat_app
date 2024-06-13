import Users from "../data/users";

const getUserById = (id) => {
  return Users.filter((user) => user.id === id);
};

export default getUserById;
