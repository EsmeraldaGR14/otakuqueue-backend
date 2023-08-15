const db = require("../db/dbConfig");

const allShowList = async () => {
  try {
    const getAllShowList = await db.any("SELECT * FROM anime_list");
    return getAllShowList;
  } catch (error) {
    return error;
  }
};

const individualShow = async (id) => {
  try {
    const getIndividualShow = await db.one(
      "SELECT * FROM anime_list WHERE id = $1",
      id
    );
    return getIndividualShow;
  } catch (error) {
    return error;
  }
};

const addNewShow = async (data) => {
  try {
    console.log(data);
    const createNewShow = await db.one(
      "INSERT INTO anime_list (title, description, genre, watched, release_date, rating, current_episode) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        data.title,
        data.description,
        data.genre,
        data.watched,
        data.release_date,
        data.rating,
        data.current_episode,
      ]
    );
    return createNewShow;
  } catch (error) {
    return error;
  }
};

const updateShow = async (id, data) => {
  try {
    const updatedShow = await db.one(
      "UPDATE anime_list SET title = $1, description = $2, genre = $3, watched = $4, release_date = $5, rating = $6, current_episode = $7 WHERE id = $8 RETURNING *",
      [
        data.title,
        data.description,
        data.genre,
        data.watched,
        data.release_date,
        data.rating,
        data.current_episode,
        id,
      ]
    );
    return updatedShow;
  } catch (error) {
    return error;
  }
};

const deleteShow = async (id) => {
  try {
    const deletedShow = await db.one(
      "DELETE FROM anime_list WHERE id = $1 RETURNING *",
      id
    );

    return deletedShow;
  } catch (error) {
    return error;
  }
};

module.exports = {
  allShowList,
  individualShow,
  addNewShow,
  updateShow,
  deleteShow,
};
