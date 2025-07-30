import React from "react";
import "./CareerApplyForm.css";

const CareerApplyForm = () => {
  return (
    <section className="careers-section apply-form">
      <h2>Apply <span className="heading">Now</span></h2>
      <p>Interested in working with us? Fill out the form and we'll get back to you.</p>

      <form className="form-container">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Role You’re Interested In" required />
        <textarea placeholder="Message (Optional)" rows="4"></textarea>
        <button type="submit">Submit Application</button>
      </form>
    </section>
  );
};

export default CareerApplyForm;
