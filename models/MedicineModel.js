const mongoose = require("mongoose");
const medicineSchema = new mongoose.Schema(
  {
    medicineName: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Medicine", medicineSchema);
