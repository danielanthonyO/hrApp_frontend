import React from 'react';
import { motion } from "framer-motion";
import { FiUsers, FiTarget, FiAward, FiHeart } from "react-icons/fi";
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="about-title">Our Story</h2>
          <p className="about-subtitle">
            Creating unforgettable experiences through innovation and passion
          </p>
        </motion.div>

        <div className="about-columns">
          <div className="about-left">
            {/* About Us Card */}
            <motion.div
              className="about-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="about-icon-box">
                <div className="about-icon"><FiUsers /></div>
                <h3 className="about-heading">About Us</h3>
              </div>
              <div className="about-text">
                <p>We are passionate about creating amazing digital experiences that empower people and businesses. Our team works tirelessly to innovate and bring fresh ideas to life.</p>
                <p>Founded in 2020, we have grown steadily by focusing on quality, creativity, and customer satisfaction.</p>
              </div>
            </motion.div>

            {/* Our Values Card */}
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="about-icon-box">
                <div className="about-icon"><FiAward /></div>
                <h4 className="about-heading">Our Values</h4>
              </div>
              <ul className="about-list">
                <li><span className="text-purple-300">•</span> Innovation and creativity</li>
                <li><span className="text-purple-300">•</span> Customer-centric approach</li>
                <li><span className="text-purple-300">•</span> Transparency and honesty</li>
                <li><span className="text-purple-300">•</span> Continuous improvement</li>
              </ul>
            </motion.div>
          </div>

          <div className="about-right">
            {/* Our Mission Card */}
            <motion.div
              className="about-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="about-icon-box">
                <div className="about-icon"><FiTarget /></div>
                <h3 className="about-heading">Our Mission</h3>
              </div>
              <div className="about-text">
                <p>Our mission is to leverage technology to solve real-world problems while fostering creativity and collaboration.</p>
                <p>Whether it's software development, design, or consulting, we strive to exceed expectations.</p>
              </div>
            </motion.div>

            {/* Why Choose Us Card */}
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="about-icon-box">
                <div className="about-icon"><FiHeart /></div>
                <h4 className="about-heading">Why Choose Us</h4>
              </div>
              <ul className="about-list">
                <li><span className="text-purple-300">•</span> Experienced and passionate team</li>
                <li><span className="text-purple-300">•</span> Cutting-edge technology</li>
                <li><span className="text-purple-300">•</span> Personalized solutions</li>
                <li><span className="text-purple-300">•</span> Proven track record</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;






