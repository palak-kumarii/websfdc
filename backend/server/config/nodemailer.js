const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async(email, subject, message) => {
    try {

        console.log(" Using email:", process.env.EMAIL);
        console.log(" Password length:", process.env.EMAIL_PASS.length);


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Websfdc Technology" <${process.env.EMAIL}>`,
            to: email,
            subject,
            text: message,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent:", info.response);

        return {
            success: true,
            message: "Email sent successfully",
        };
    } catch (err) {
        console.error(" Email error:", err.message);
        return {
            success: false,
            message: "Failed to send email",
            error: err.message,
        };
    }
};

module.exports = sendMail;