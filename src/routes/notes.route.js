const express = require("express");
const {
  createNotesController,
  getallNotesControlller,
  deletenotesController,
} = require("../controllers/notes.controller");

const router = express.Router();

router.get("/create", createNotesController);
router.post("/all", getallNotesControlller);
router.delete("/delete/:id", deletenotesController);

module.exports = router;
