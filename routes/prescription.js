const express = require("express");
const router = express.Router();
const {  Prescription, Medicine, getPrescriptions, getMedicines} = require("../controllers/PrescriptionController");
router.post("/add-prescription", Prescription);
router.post("/add-medicine", Medicine);
router.get("/get-prescriptions", getPrescriptions);
router.get("/get-medicines", getMedicines);
module.exports = router;
