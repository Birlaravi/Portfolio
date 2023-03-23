import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub,FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="contact-icons">
      <FaEnvelope />
        <a href="mailto:ravindrabirla20@gmail.com">
           ravindrabirla20@gmail.com
        </a>
</div>
<div className="contact-icons">
      <FaMobileAlt />
        <a href="tel:9575921390">
           +919575921390
        </a>
</div>
</div>
);
};

export default Contact;