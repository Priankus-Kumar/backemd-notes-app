const { default: mongoose } = require("mongoose");

const notesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minlength: [20, "Minimum 20 character are required"],
  },
});

const notesModel = mongoose.model("Notes", notesSchema);
module.exports = notesModel;
