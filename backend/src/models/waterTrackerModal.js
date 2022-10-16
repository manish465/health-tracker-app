const mongoose = require("mongoose");

const waterSchema = new mongoose.Schema(
    {
        howMuch: { require: true, type: String },
        when: { require: true, type: Date },
        userId: { require: true, type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Water", waterSchema);
