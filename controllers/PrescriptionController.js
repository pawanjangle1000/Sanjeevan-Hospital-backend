const Prescription = require("../models/Prescription");
const Medicine = require("../models/MedicineModel");
exports.Prescription = async (req, res) => {
    const {patientName, age, bp, sugar, prescriptionData} = req.body;
    const newPrescription = new Prescription({
      patientName, age, bp, sugar, prescriptionData 
    });
    const prescription = await newPrescription.save();
    if (prescription) {
      return res
        .status(200)
        .json({
          prescription,
          message: "prescription created successfully",
        });
    } else {
      res.status(400).json({ error: "Failed to create prescription " });
    }
};
exports.Medicine = async (req, res) => {
    const { medicineName, contents, weight, type} = req.body;
    const newMedicine = new Medicine({
      medicineName, contents, weight, type 
    });
    const medicine = await newMedicine.save();
    if (medicine) {
      return res
        .status(200)
        .json({
          medicine,
          message: "medicine created successfully",
        });
    } else {
      res.status(400).json({ error: "Failed to create medicine " });
    }
};
exports.getPrescriptions = async (req, res) => {
  const Prescriptions  = await Prescription.find().sort({"createdAt": -1});
  if (Prescriptions) {
    return res.status(200).json({ Prescriptions });
  }
};
exports.getMedicines = async (req, res) => {
  const Medicines  = await Medicine.find().sort({"createdAt": -1});
  if (Medicines) {
    return res.status(200).json({ Medicines });
  }
};
// exports.updateProduct = async (req, res) => {
//   const { id } = req.params;
//     const { name, price, description, quantity, category } = req.body;
//     const newProduct = {
//       name,
//       price,
//       description,
//       category,    
//       // createdBy: req.user._id,
//       quantity,
//     };
//     if (req.file) {
//       newProduct.productPicture = req.file.location
//     }
//     const product = await Product.findOneAndUpdate({_id : id}, newProduct, {new: true});
//     if (product) {
//       return res.status(200).json({message:"Product updated successfully", product });
//     }
//     else{
//       return res.json({ error: "Failed to update product"})
//     }
// };
// exports.deleteProduct = async (req, res) => {
//   Product.findOne({ _id: req.params.id }).exec((err, product) => {
//     if (err || !product) {
//       return res.status(422).json({ error: err });
//     }
//     product
//       .remove()
//       .then((result) => {
//         return res
//           .status(200)
//           .json({ result, message: "Product Deleted successfully" });
//       })
//       .catch((err) => {
//         return res.json({ error: "Failed to delete Product" });
//       });
//   });
// };
// exports.getProduct = async (req, res) => {
//   const { id } = req.params;
//   const product = await Product.findOne({ _id: id });
//   if (product) {
//     return res.status(200).json({ product });
//   } else {
//     return res.json({ error: "something went wrong" });
//   }
// };
// exports.getProductsByCategory = async (req, res)=>{
//   const {category} = req.body;
// const products = await Product.find({category}).sort({"price": 1})
// if(products){
//   res.status(200).json({products})
// }
// else{
//   res.json({error: "something went wrong"})
// }
// }
// exports.productDetails = async (req, res) => {
//   const { id } = req.params;
//   const product = await Product.findOne({ _id: id });
//   if (product) {
//     return res.status(200).json({ product });
//   } else {
//     return res.json({ error: "something went wrong" });
//   }
// }