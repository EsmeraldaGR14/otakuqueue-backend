// user_watchlist
const db = require("../db/dbConfig");

const allUserWatchlist = async (userId) => {
  try {
    const getAllUserWatchlist = await db.any(
      "SELECT * FROM user_watchlist WHERE user_id = $1 ORDER BY id ASC",
      userId
    );
    return getAllUserWatchlist;
  } catch (error) {
    throw error;
  }
};

//   "SELECT * FROM user_watchlist WHERE id = $1"
const singleUserWatchlist = async (userId, userWatchlistId) => {
  try {
    console.log(userId, userWatchlistId);
    const getSingleUserWatchlist = await db.any(
      "SELECT user_watchlist.user_id, user_watchlist.anime_id, user_watchlist.status, user_watchlist.current_episode, user_watchlist.is_favorite FROM user_watchlist JOIN users ON user_watchlist.user_id = users.id WHERE users.id = $1 AND user_watchlist.user_id = $2",
      [userId, userWatchlistId]
    );
    return getSingleUserWatchlist;
  } catch (error) {
    throw error;
  }
};

const singleUserWatchlistItem = async (userWatchlistId, data) => {
  try {
    console.log(userWatchlistId, data);
    const getWatchlistItem = db.any(
      "SELECT * user_watchlist WHERE id = $1 AND "
    );
  } catch (error) {
    throw error;
  }
};

const createNewUserWatchlist = async (userId, data) => {
  try {
    const createdNewUserWatchlist = await db.any(
      "INSERT INTO user_watchlist (user_id, anime_id, status, current_episode, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        userId,
        data.anime_id,
        data.status,
        data.current_episode,
        data.is_favorite,
      ]
    );
    return createdNewUserWatchlist;
  } catch (error) {
    throw error;
  }
};
const updateUserWatchlist = async (id, data) => {
  try {
    const updatedUserWatchlist = await db.one(
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
    throw error;
  }
};
const deleteUserWatchlist = async (id) => {
  try {
    const deletedUserWatchlist = await db.one(
      "DELETE FROM user_watchlist WHERE id = $1",
      id
    );
    return deletedUserWatchlist;
  } catch (error) {
    throw error;
  }
};

const allUserWatchlistOnUserbyId = async (userId) => {
  try {
    const userDetailsWithWatchlist = await db.any(
      `SELECT * FROM users INNER JOIN user_watchlist ON users.id = user_watchlist.user_id WHERE users.id = $1`,
      userId
    );
    return userDetailsWithWatchlist;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  allUserWatchlist,
  singleUserWatchlist,
  createNewUserWatchlist,
  updateUserWatchlist,
  deleteUserWatchlist,
  allUserWatchlistOnUserbyId,
};
