import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailAddress: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

    navigate("/");
  }

  return (
    <main className="contact-page">
      <h1>Contact Me</h1>

      <p className="contact-intro">
        If you would like to get in touch with me, you can use the information
        below or send me a message.
      </p>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>
            <strong>Name:</strong> Asim Kayani
          </p>

          <p>
            <strong>Email:</strong> Your Email Here
          </p>

          <p>
            <strong>Phone:</strong> Your Phone Number Here
          </p>
        </div>

        <div className="contact-form">
          <h2>Send Me a Message</h2>

          <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />

            <label>Contact Number:</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />

            <label>Email Address:</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />

            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;