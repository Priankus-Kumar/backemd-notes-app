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

const updateNotesController = async (req, res) => {
  try {
    let notesId = req.params.id;
    let body = req.body;

    // in this we update the exitence notes and give the current answer using(new:true) which help me for updating in right time.

    let updatenotes = await notesModel.findByIdAndUpdate(notesId, body, {
      new: true,
    });
    return res.status(201).json({
      message: "notes updated successfull",
      data: updatenotes,
    });
  } catch (error) {
    console.log("erorr from the update", error);
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

module.exports = {
  createNotesController,
  getallNotesControlller,
  updateNotesController,
  deletenotesController,
};
