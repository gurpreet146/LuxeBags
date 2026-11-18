
import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <p>GET IN TOUCH</p>
        <h2>Contact Us</h2>
        <span>
          Have a question? We'd love to hear from you.
        </span>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Message →
        </button>

        {success && (
          <p className="success-message">
            {success}
          </p>
        )}

      </form>

    </section>
  );
}

export default Contact;
