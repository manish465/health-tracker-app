const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: { require: true, unique: true, type: String },
        hash_password: { require: true, type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
