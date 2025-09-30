import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminNumber = "918091120741"; // Admin WhatsApp
    const rawPhone = formData.phone.replace(/\D/g, ""); // Remove non-digits
    const userNumber = rawPhone.length >= 10 ? "91" + rawPhone : null;

    if (!userNumber) {
      alert("⚠️ Please enter a valid 10-digit phone number!");
      return;
    }

    try {
      // Send form data to backend
      const response = await axios.post(
        "http://localhost:5000/api/createcontact",
        formData
      );

      alert(response.data.message);

      // Prepare WhatsApp messages
      const adminMsg = `📩 New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project: ${formData.project}
Subject: ${formData.subject}
Message: ${formData.message}`;

      const userMsg = `Hi ${formData.name}, thank you for contacting us! We will get back to you shortly.`;

      // Open WhatsApp for admin
      window.open(
        `https://wa.me/${adminNumber}?text=${encodeURIComponent(adminMsg)}`,
        "_blank"
      );

      // Open WhatsApp for user after 1 second
      setTimeout(() => {
        window.open(
          `https://wa.me/${userNumber}?text=${encodeURIComponent(userMsg)}`,
          "_blank"
        );
      }, 1000);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "❌ Error submitting form.");
    }
  };

  return (
    <div className="container-fluid contact bg-light py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="contact-item pb-5">
              <h4 className="text-primary">Contact Us</h4>
              <h1 className="display-4 mb-4">Get In Touch With Us</h1>
              <p className="mb-0">
                Fill out the form and we’ll get back to you as soon as possible.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {[
                  { id: "name", type: "text", placeholder: "Your Name", required: true },
                  { id: "email", type: "email", placeholder: "Your Email", required: true },
                  { id: "phone", type: "text", placeholder: "Phone", required: true },
                  { id: "project", type: "text", placeholder: "Project", required: false },
                  { id: "subject", type: "text", placeholder: "Subject", required: true },
                ].map((field) => (
                  <div className="col-lg-6 col-12" key={field.id}>
                    <div className="form-floating">
                      <input
                        type={field.type}
                        className="form-control"
                        id={field.id}
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required={field.required}
                      />
                      <label htmlFor={field.id}>{field.placeholder}</label>
                    </div>
                  </div>
                ))}

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 160 }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success w-100 py-3">
                    Send via WhatsApp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
