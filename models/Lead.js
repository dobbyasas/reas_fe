const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  estateType: { type: String, required: true },
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  region: { type: String, required: true },
  district: { type: String, required: true }
});

module.exports = mongoose.model('Lead', leadSchema);
