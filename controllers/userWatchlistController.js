const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  allUserWatchlist,
  singleUserWatchlist,
  createNewUserWatchlist,
  updateUserWatchlist,
  deleteUserWatchlist,
  allUserWatchlistOnUserbyId,
} = require("../queries/userWatchlist");

router.get("/", async (req, res) => {
  try {
    const getAllUserWatchlist = await allUserWatchlist(req.params.userId);
    res.json(getAllUserWatchlist);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/:watchlistId", async (req, res) => {
  try {
    // res.json(req.params);
    const getSingleUserWatchlist = await singleUserWatchlist(
      req.params.userId,
      req.params.watchlistId
    );
    res.json(getSingleUserWatchlist);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const createdNewUserWatchlist = await createNewUserWatchlist(
      req.params.id,
      req.body
    );
    res.json(createdNewUserWatchlist);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUserWatchlist = await updateUserWatchlist(req.params.id);
    res.json(updatedUserWatchlist);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUserWatchlist = await deleteUserWatchlist(req.params.id);
    res.json(deletedUserWatchlist);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/get-all-watchlist/:userId", async (req, res) => {
  try {
    const details = await allUserWatchlistOnUserbyId(req.params.userId);
    res.json(details);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});
module.exports = router;
