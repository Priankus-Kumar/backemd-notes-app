const notesModel = require("../model/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;
    let newNote = await notesModel.create({
      title,
      description,
    });
    return res
      .status(201)
      .json({ message: "notes create succesfull", data: newNote });
  } catch (error) {
    console.log("error ", error);
  }
};

const getallNotesControlller = async (req, res) => {
  try {
    const allNotes = await notesModel.find();
    return res
      .status(201)
      .json({ message: "All notes get succesfull", data: allNotes });
  } catch (error) {
    console.log("Error from getallcontroller", error);
  }
};

const deletenotesController = async (req, res) => {
  try {
    let notesId = req.params.id;
    await notesModel.findByIdAndDelete(notesId);

    return res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.log("error from deletecontroller", error);
  }
};

module.exports = { createNotesController, getallNotesControlller,deletenotesController };
