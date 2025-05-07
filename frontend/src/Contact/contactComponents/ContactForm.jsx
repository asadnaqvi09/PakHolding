import React from "react";
import "../../Styles/Contact/ContactForm.css";

function ContactFormSection() {
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
        <form className="contact-form">
          {/* Name Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="form-input"
                required
              />
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
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
              />
            </div>
          </div>

          {/* Dropdown */}
          <div className="form-group-full">
            <label htmlFor="topic" className="form-label">
              Select a Topic
            </label>
            <select id="topic" name="topic" className="form-select">
              <option value="">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          {/* Radio Buttons */}
          <div className="form-group-full">
            <label className="form-label">
              How did you hear about us?
            </label>
            <div className="radio-group">
              <div className="radio-option">
                <input id="hear-social" name="hear-about" type="radio" className="form-radio" />
                <label htmlFor="hear-social" className="radio-label">
                  Social Media
                </label>
              </div>
              <div className="radio-option">
                <input id="hear-search" name="hear-about" type="radio" className="form-radio" />
                <label htmlFor="hear-search" className="radio-label">
                  Search Engine
                </label>
              </div>
              {/* Add other radio options similarly */}
            </div>
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
              className="form-textarea"
              required
            ></textarea>
          </div>

          {/* Terms Checkbox */}
          <div className="form-checkbox">
            <input id="terms" name="terms" type="checkbox" className="form-checkbox-input" required />
            <label htmlFor="terms" className="checkbox-label">
              I agree to the terms and conditions
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-submit">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactFormSection;