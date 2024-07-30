import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.fullName) {
      formIsValid = false;
      errors.fullName = "Full name is required.";
    }

    if (!formData.email) {
      formIsValid = false;
      errors.email = "Email is required.";
    }

    if (!formData.message) {
      formIsValid = false;
      errors.message = "Message is required.";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container my-5">
      <h1 className="display-4 mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.fullName}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="invalid-feedback">{errors.message}</div>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
