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
    const getIndividualShow = await db.any(
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
    const createNewShow = await db.any(
      "INSERT INTO anime_list (title, description, genre, release_date, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [data.title, data.description, data.genre, data.release_date, data.rating]
    );

    return createNewShow;
  } catch (error) {
    return error;
  }
};

const updateShow = async (id, data) => {
  try {
    console.log(id, data);
    const updatedShow = await db.any(
      "UPDATE anime_list SET title = $1, description = $2, genre = $3, release_date = $4, rating = $5 WHERE id = $6 RETURNING *",
      [
        data.title,
        data.description,
        data.genre,
        data.release_date,
        data.rating,
        id,
      ]
    );

    return updatedShow;
  } catch (error) {
    throw error;
  }
};

const deleteShow = async (id) => {
  try {
    const deletedShow = await db.any(
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
