const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please add title"],
    unique: true,
    trim: true,
    maxLength: [40, "Title cannot be more than 40 character"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "description be more 200 word"],
  },
});

module.exports =
  mongoose.model.Product || mongoose.model("Product", ProductSchema);
