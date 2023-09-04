const express = require("express");
const router = express.Router();

const {
  allShowList,
  individualShow,
  addNewShow,
  updateShow,
  deleteShow,
} = require("../queries/animeList");

router.get("/", async (req, res) => {
  try {
    const getAllShowList = await allShowList();
    res.json(getAllShowList);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getIndividualShow = await individualShow(req.params.id);
    res.json(getIndividualShow);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const createNewShow = await addNewShow(req.body);
    res.json(createNewShow);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const updatedShow = await updateShow(req.params.id, req.body);
    console.log(updatedShow);
    res.json(updatedShow);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedShow = await deleteShow(req.params.id);
    res.json(deletedShow);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
