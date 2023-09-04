const db = require("../db/dbConfig");

const allUsers = async () => {
  try {
    const getAllUsers = await db.any("SELECT * FROM users");
    return getAllUsers;
  } catch (error) {
    return error;
  }
};

const getUserByUsername = async (username) => {
  try {
    const user = await db.oneOrNone("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    console.log(user);
    return user;
  } catch (error) {
    console.error("getUserByUsername error:", error);
    return null;
  }
};

const singleUser = async (id) => {
  try {
    const getSingleUser = await db.one("SELECT * FROM users WHERE id = $1", id);
    return getSingleUser;
  } catch (error) {
    return error;
  }
};

const createNewUser = async (data) => {
  try {
    const createdUser = await db.any(
      "INSERT INTO users (username) VALUES ($1) RETURNING *",
      [data.username]
    );
    return createdUser;
  } catch (error) {
    return error;
  }
};

const updateUser = async (id, data) => {
  try {
    const updatedUser = await db.any(
      "UPDATE users SET username = $1 WHERE id = $2 RETURNING *",
      [data.username, id]
    );
    return updatedUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id = $1 RETURNING *"
    );
    return deletedUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  allUsers,
  singleUser,
  createNewUser,
  updateUser,
  deleteUser,
  getUserByUsername,
};
