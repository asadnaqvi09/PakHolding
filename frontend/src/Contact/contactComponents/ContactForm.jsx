import React, { useState } from "react";
import "../../Styles/Contact/ContactForm.css";
import emailjs from "emailjs-com";

function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    hearAbout: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (
      formData.phone &&
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.topic) newErrors.topic = "Please select a topic";
    if (!formData.hearAbout) newErrors.hearAbout = "Please select an option";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const config = {
    EMAILJS_USER_ID: "egWqTV42ImpljAZnAI",
    EMAILJS_SERVICE_ID: "service_5uy02sm",
    EMAILJS_TEMPLATE_ID: "template_l6x60wo",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your credentials
      emailjs.init(config.EMAILJS_USER_ID || "user_1234567890");

      // Send the email using EmailJS
      const response = await emailjs.send(
        config.EMAILJS_SERVICE_ID || "service_123456",
        config.EMAILJS_TEMPLATE_ID || "template_123456",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          email: formData.email, // For reply-to
          phone_number: formData.phone || "Not provided",
          topic: formData.topic,
          hear_about: formData.hearAbout,
          message: formData.message,
          time: new Date().toLocaleString(), // Add timestamp
          to_email: "azadari87@gmail.com",
        }
      );
      console.log("Email sent successfully:", response);

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        hearAbout: "",
        message: "",
        terms: false,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-section">
      <div className="form-container">
        {/* Header Section */}
        <div className="form-header">
          <p className="form-subtitle">Connect</p>
          <h2 className="form-title">Get in Touch</h2>
          <p className="form-description">What is your message?...</p>
        </div>

        {/* Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`form-input ${errors.firstName ? "error" : ""}`}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`form-input ${errors.lastName ? "error" : ""}`}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
          </div>

          {/* Contact Info Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? "error" : ""}`}
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-input ${errors.phone ? "error" : ""}`}
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>
          </div>

          {/* Dropdown */}
          <div className="form-group-full">
            <label htmlFor="topic" className="form-label">
              Select a Topic
            </label>
            <select
              id="topic"
              name="topic"
              className={`form-select ${errors.topic ? "error" : ""}`}
              value={formData.topic}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="feedback">Feedback</option>
            </select>
            {errors.topic && (
              <span className="error-message">{errors.topic}</span>
            )}
          </div>

          {/* Radio Buttons */}
          <div className="form-group-full">
            <label className="form-label">How did you hear about us?</label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  id="hear-social"
                  name="hearAbout"
                  type="radio"
                  className="form-radio"
                  value="social"
                  checked={formData.hearAbout === "social"}
                  onChange={handleChange}
                />
                <label htmlFor="hear-social" className="radio-label">
                  Social Media
                </label>
              </div>
              <div className="radio-option">
                <input
                  id="hear-search"
                  name="hearAbout"
                  type="radio"
                  className="form-radio"
                  value="search"
                  checked={formData.hearAbout === "search"}
                  onChange={handleChange}
                />
                <label htmlFor="hear-search" className="radio-label">
                  Search Engine
                </label>
              </div>
              <div className="radio-option">
                <input
                  id="hear-friend"
                  name="hearAbout"
                  type="radio"
                  className="form-radio"
                  value="friend"
                  checked={formData.hearAbout === "friend"}
                  onChange={handleChange}
                />
                <label htmlFor="hear-friend" className="radio-label">
                  Friend or Colleague
                </label>
              </div>
              <div className="radio-option">
                <input
                  id="hear-other"
                  name="hearAbout"
                  type="radio"
                  className="form-radio"
                  value="other"
                  checked={formData.hearAbout === "other"}
                  onChange={handleChange}
                />
                <label htmlFor="hear-other" className="radio-label">
                  Other
                </label>
              </div>
            </div>
            {errors.hearAbout && (
              <span className="error-message">{errors.hearAbout}</span>
            )}
          </div>

          {/* Message Area */}
          <div className="form-group-full">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`form-textarea ${errors.message ? "error" : ""}`}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="form-checkbox">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="form-checkbox-input"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms" className="checkbox-label">
              I agree to the terms and conditions
            </label>
            {errors.terms && (
              <span className="error-message">{errors.terms}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-submit">
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            {submitStatus === "success" && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="error-message">
                There was an error sending your message. Please try again later.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactFormSection;
