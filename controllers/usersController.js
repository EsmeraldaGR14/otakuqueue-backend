const express = require("express");
const router = express.Router();

const userWatchlistController = require("./userWatchlistController");

router.use("/:userId/watchlist", userWatchlistController);

const {
  allUsers,
  singleUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../queries/users");

router.get("/", async (req, res) => {
  try {
    const getAllUsers = await allUsers();
    res.json(getAllUsers);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getSingleUser = await singleUser(req.params.id);
    res.json(getSingleUser);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const createdUser = await createNewUser(req.body);
    res.json(createdUser);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await deleteUser(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
