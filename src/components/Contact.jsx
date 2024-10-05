import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-form">
      <h2>Contact Me</h2>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button>Send Message</button>
    </section>
  );
};

export default Contact;
