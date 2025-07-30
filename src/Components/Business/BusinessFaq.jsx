import React from "react";
import "./BusinessFaq.css"



const BusinessFaq = () => {
    return (
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>💼 What is the minimum investment required?</h3>
          <p>
            The investment varies by model. For retail franchises, it starts
            from ₹3–5 lakhs. Distributors and online partners have different
            models and flexibility.
          </p>
        </div>

        <div className="faq-item">
          <h3>📦 What kind of support will I receive?</h3>
          <p>
            You will receive full support including inventory guidance,
            marketing material, training, and technology assistance.
          </p>
        </div>

        <div className="faq-item">
          <h3>📈 How long before I start earning profits?</h3>
          <p>
            Most partners see returns within 3–6 months depending on market
            conditions and effort.
          </p>
        </div>

        <div className="faq-item">
          <h3>🧠 Do I need prior experience in pharma or retail?</h3>
          <p>
            No, our training program prepares anyone — regardless of background
            — to succeed as a Janhit partner.
          </p>
        </div>

        <div className="faq-item">
          <h3>🏬 Can I choose the business model based on my city or area?</h3>
          <p>
            Yes. Our team will help you select the best model based on your
            location, population, and competition.
          </p>
        </div>
      </section>
  );
};

export default BusinessFaq;
