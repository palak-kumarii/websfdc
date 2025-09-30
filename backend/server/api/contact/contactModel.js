const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "null",
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        default: "",
    },
    project: {
        type: String,
        required: true,
        default: "",
    },
    subject: {
        type: String,
        required: true,
        default: "",
    },
    message: {
        type: String,
        required: true,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now, // pass function, not executed
    },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
module.exports = Contact;