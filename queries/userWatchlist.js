// user_watchlist
const db = require("../db/dbConfig");

const allUserWatchlist = async (userId) => {
  try {
    const getAllUserWatchlist = db.any(
      "SELECT * FROM user_watchlist WHERE id = $1",
      userId
    );
    return getAllUserWatchlist;
  } catch (error) {
    return error;
  }
};
const singleUserWatchlist = async (id) => {
  try {
    const getSingleUserWatchlist = db.one(
      "SELECT * FROM user_watchlist WHERE id = $1"
    );
    return getSingleUserWatchlist;
  } catch (error) {
    return error;
  }
};
const createNewUserWatchlist = async (data) => {
  try {
    const createdNewUserWatchlist = db.any(
      "INSERT INTO user_watchlist (user_id, anime_id, status, current_episode, is_favorite) VALUES ($1, $2, $3, $4, $5) RETRUNGING *",
      [
        data.user_id,
        data.anime_id,
        data.status,
        data.current_episode,
        data.is_favorite,
      ]
    );
    return createdNewUserWatchlist;
  } catch (error) {
    return error;
  }
};
const updateUserWatchlist = async (id, data) => {
  try {
    const updatedUserWatchlist = db.one(
      "UPDATE user_watchlist SET user_id = $1, anime_id = $2, status = $3, current_episode = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
      [
        data.user_id,
        data.anime_id,
        data.status,
        data.current_episode,
        data.is_favorite,
        id,
      ]
    );
    return updatedUserWatchlist;
  } catch (error) {
    return error;
  }
};
const deleteUserWatchlist = async (id) => {
  try {
    const deletedUserWatchlist = db.one(
      "DELETE FROM user_watchlist WHERE id = $1",
      id
    );
    return deletedUserWatchlist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  allUserWatchlist,
  singleUserWatchlist,
  createNewUserWatchlist,
  updateUserWatchlist,
  deleteUserWatchlist,
};
