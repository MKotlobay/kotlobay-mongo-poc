const mongoose = require("mongoose");

const SquareSchema = new mongoose.Schema({
    length: Number,
    color: String,
    isFilled: Boolean,
    text: String,
    textColor: String,
});

const Square = mongoose.model("Square", SquareSchema);
module.exports = Square;