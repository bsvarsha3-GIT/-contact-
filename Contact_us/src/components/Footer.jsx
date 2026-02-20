import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer-left">
          <div className="logo">
            <img src="/foot_logo.png" alt="" />
            <h2>Company Logo</h2>
          </div>

          <p className="foot_description">
            Leading manufacturer and exporter of modular belts, flat and
            conveyor components. Serving industries worldwide with innovative
            material handling solutions.
          </p>
          <p className="spectra">Spectra Plast Pvt. Ltd.</p>
          <div className="foot_contact">
            <p>
              <img src="/foot_location.svg" alt="" /> No. 1A, Buddha 4th Street,
              Ramakrishnapuram,Ganapathy, Coimbatore - 641006, India
            </p>
            <p>
              <img src="/footer_call.png" alt="" />
              +91 **********
              <button>
                <img src="/lock.png" alt="lock" />
                View number
              </button>
            </p>
            <p>
              <img src="/footer_mail.png" alt="" /> Email@company.com
            </p>
            <p>
              Share <img src="/footer_socialmedia.svg" alt="" />
            </p>
          </div>

          <div className="footer-buttons">
            <button>
              <img src="/message.png" alt="" />
              Send Message
            </button>
            <button>
              <img src="/footer_mail.png" alt="" />
              Send Email
            </button>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-col">
            <h3>Company</h3>
            <div className="companydiv">
              <ul>
                <li>About Us</li>
                <li>Infrastructure</li>
                <li>Quality Assurance</li>
                <li>Team</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <h3>Products</h3>

            <div className="footer-content">
              <div>
                <p>Group 1</p>
                <ul>
                  <li>Mini Vertical Band Sealing Machine</li>
                  <li>Horizontal Band Sealer - Stainless</li>
                  <li>Horizontal Band Sealer - Stainless</li>
                </ul>

                <p>Group 2</p>
                <ul>
                  <li>Mini Vertical Band Sealing Machine</li>
                  <li>Horizontal Band Sealer - Stainless</li>
                </ul>

                <p>Group 3</p>
                <ul>
                  <li>Mini Vertical Band Sealing Machine</li>
                  <li>Horizontal Band Sealer - Stainless</li>
                </ul>
              </div>

              <div>
                <p>Group 1</p>
                <ul>
                  <li>Mini Vertical Band Sealing Machine</li>
                  <li>Horizontal Band Sealer - Stainless</li>
                </ul>

                <p>Group 3</p>
                <ul>
                  <li>Mini Vertical Band Sealing Machine</li>
                  <li>Horizontal Band Sealer - Stainless</li>
                </ul>
              </div>

              <div>
                <p>Group 1</p>
                <ul>
                  <li>Mini Vertical Band Sealing Machine</li>
                  <li>Horizontal Band Sealer - Stainless</li>
                </ul>

                <p>Group 2</p>
                <ul>
                  <li>Mini Vertical Band Sealing Machine</li>
                  <li>Horizontal Band Sealer - Stainless</li>
                </ul>

                <p>Group 3</p>
                <ul>
                  <li>Mini Vertical Band Sealing Machine</li>
                  <li>Horizontal Band Sealer - Stainless</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
         </div>
          
          <div className="foot_mobile">
              <div className="foot_pro">
                  <h5>Product</h5>
                  <span>+</span>
              </div>
              <div className="foot_abo">
                  <h5>About us</h5>
                  <span>+</span>
              </div>
              <div className="foot_con">
                  <h5>Contact us</h5>
                  <span>+</span>
              </div>
          </div>

           <div className="foot_2025">
                  <p>© 2025 by Business Name. <br />
All Rights Reserved. Privacy Policy  |  Terms of Use</p>
              </div>

      <div className="footer-bottom">
        <div className="footer_lang">
          <p>© 2025 Spectra Plast. All rights reserved. </p>
          <div className="foot_language">
            <img src="/globe-alt.png" alt="globe" />
            <span>EN</span>
            <img src="/Vector 170.png" alt="arrow" />
          </div>
        </div>
        <div className="footer_prvacy">
          <p>© 2025 by Business Name. All rights reserved.</p>
          <div>
            <p>Privacy Policy</p>
            <span>|</span>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
