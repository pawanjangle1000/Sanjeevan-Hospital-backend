const mongoose = require("mongoose");
const prescriptionSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bp: {
      type: Number,
    },
    sugar: {
      type: Number,
    },
    prescriptionData : [{
      medicine: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      timing: {
        type: String,
        required: true
      },
      afterorbefore: {
        type: String,
        required: true
      }

    }
    ]
  },
  { timestamps: true }
);
module.exports = mongoose.model("Prescription", prescriptionSchema);
