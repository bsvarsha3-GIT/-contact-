import React from "react";
import "./Contact.css";

import callIcon from "../assets/contact_img/call.png";
import messageIcon from "../assets/contact_img/message.png";
import lockIcon from "../assets/contact_img/lock.png";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <div className="contact-heading">
            <h2>Get in touch</h2>
            <p>
              Drop us a line sed id semper risus in hendrerit gravida rutrum.
            </p>
          </div>

                  <div className="con_ap">
                      <div className="contact-address">
            <h4>Address</h4>
            <p>
              Company Name <br />
              2nd Floor, #13, Old No.246, 13th Cross Rd, <br />
              Wilson Garden, Bengaluru, <br />
              Karnataka 560027, India
            </p>
          </div>

          <div className="contact-phone">
            <h4>Phone</h4>
            <div className="phone-row">
              <span>+91 ***** ****0</span>
              <button type="button" className="view-number">
                <img src={lockIcon} alt="lock" />
                View Number
              </button>
            </div>
          </div>

          <div className="contact-actions">
            <button type="button" className="contact-action-button">
              <img src={callIcon} alt="call" />
              Call Us
            </button>

            <button type="button" className="contact-action-button">
              <img src={messageIcon} alt="message" />
              Send Message
            </button>

            <button type="button" className="contact-action-button">
              <img src={messageIcon} alt="email" />
              Send Email
            </button>
          </div>
                      
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your name*" required />
              <input type="email" placeholder="Email*" required />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Company" />
            </div>

            <input type="text" placeholder="Location" />
            <textarea placeholder="Description"></textarea>

            <div className="form-bottom">
              <p className="form-policy">
                By clicking on “Submit” button you accept the Privacy Policy and
                Processing of personal data
              </p>

              <button type="submit" className="form-submit-btn">
                Submit →
              </button>
            </div>
            </form>
                  <div className="con_mob">
                      <div className="contact-address">
            <h4>Address</h4>
            <p>
              Company Name <br />
              2nd Floor, #13, Old No.246, 13th Cross Rd, <br />
              Wilson Garden, Bengaluru, <br />
              Karnataka 560027, India
            </p>
          </div>

          <div className="contact-phone">
            <h4>Phone</h4>
            <div className="phone-row">
              <span>+91 ***** ****0</span>
              <button type="button" className="view-number">
                <img src={lockIcon} alt="lock" />
                View Number
              </button>
            </div>
          </div>

          <div className="contact-actions">
            <button type="button" className="contact-action-button">
              <img src={callIcon} alt="call" />
              Call Us
            </button>

            <button type="button" className="contact-action-button">
              <img src={messageIcon} alt="message" />
              Send Message
            </button>

            <button type="button" className="contact-action-button">
              <img src={messageIcon} alt="email" />
              Send Email
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
