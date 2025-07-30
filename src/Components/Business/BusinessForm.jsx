import React from "react";
import "./BusinessForm.css"



const BusinessForm = () => {
    return (
      <section id="contact-form" className="contact-form">
        <h2>
          Ready to <br /> <div className="heading">Partner With Us? </div>
        </h2>
        <form>
          <input type="text" placeholder="Your Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <select>
            <option>Choose Opportunity Type</option>
            <option>Retail Franchise</option>
            <option>Distributor</option>
            <option>Online Partner</option>
          </select>
          <textarea placeholder="Tell us about yourself or your interest"></textarea>
          <button type="submit">Submit Application</button>
        </form>
      </section>
  );
};

export default BusinessForm;
