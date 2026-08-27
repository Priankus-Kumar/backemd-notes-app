const express = require("express");
const {
  createNotesController,
  getallNotesControlller,
  deletenotesController,
  updateNotesController,
} = require("../controllers/notes.controller");

const router = express.Router();

router.get("/create", createNotesController);
router.post("/all", getallNotesControlller);
router.delete("/delete/:id", deletenotesController);
router.put("/update/:id",updateNotesController)

module.exports = router;
