import React from "react";
import "./css/Contact.css";

function Contact() {
  const contactInfo = {
    email: "bx4.adlin@gmail.com",
    cellphone: "0982323264",
    lineID: "bx4.ad",
  };

  return (
    <footer className="contact-footer" id="contact">
      <div className="contact-content" data-aos="fade-up">
        <h2 className="footer-title">Get in Touch</h2>
        <div className="contact-items">
          <div className="contact-item">
            <span>Email：</span>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
          <div className="contact-item">
            <span>Phone：</span>
            <a href={`tel:${contactInfo.cellphone}`}>{contactInfo.cellphone}</a>
          </div>
          <div className="contact-item">
            <span>Line：</span>
            <span>{contactInfo.lineID}</span>
          </div>
        </div>
        <p className="footer-note">© 2025 Lin Jingtin. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;
