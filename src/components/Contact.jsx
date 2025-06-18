import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a97d6qn",    // e.g., 'gmail'
        "template_48ysmeu",   // from EmailJS dashboard
        form.current,
        "8jc9bwqi8Fiof-TkR"     // from EmailJS account
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-info">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="reply_to" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
