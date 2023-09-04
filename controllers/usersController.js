const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
// const verifyToken = require("../validations/verifyToken");

const userWatchlistController = require("./userWatchlistController");

router.use("/:userId/watchlist", userWatchlistController);

const {
  allUsers,
  singleUser,
  createNewUser,
  updateUser,
  deleteUser,
  getUserByUsername,
} = require("../queries/users");

router.get("/", async (req, res) => {
  try {
    const getAllUsers = await allUsers();
    res.json(getAllUsers);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  // console.log("username:", username);
  // res.json("hello");

  try {
    const { username } = req.body;
    console.log(username);

    const user = await getUserByUsername(username);
    // console.log("user", user);

    if (!user) {
      console.log("user is invalid");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // console.log("User found:", user);

    const token = jwt.sign({ userId: user.id }, secret, {
      expiresIn: "1d",
    });

    console.log("Token generated:", token);

    res.json({ token });
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/:username", async (req, res) => {
  try {
    const getSingleUser = await getUserByUsername(req.params.username);
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
