// // src/components/Footer.jsx
// import React from 'react';
// import "./Footer.css"; // or inline CSS with vars


import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      {/* Top CTA */}
      <div className="footer-top">
        <h2>For assistance</h2>
        <div className="footer-buttons">
          <Link to="/add" className="start" onClick={() => setMenuOpen(false)}>Get started</Link>
          <Link to="/about" className="contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
        </div>
      </div>

      {/* Main Section */}
      <div className="footer-main">
        <div className="footer-brand">
          <h3>HR APPLICATION</h3>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy & Cookies Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Lumo Planner. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;




// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         <div>
//           <h4>About</h4>
//           <p>HR Portal for modern teams and people-first organizations.</p>
//         </div>
//         <div>
//           <h4>Contact</h4>
//           <p>Email: support@hrportal.com</p>
//           <p>Phone: +1 555 123 4567</p>
//         </div>
//         <div>
//           <h4>Follow Us</h4>
//           <a href="#">LinkedIn</a> | <a href="#">Twitter</a>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} HR Portal. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

