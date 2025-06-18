import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-info">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        <form action="https://formsubmit.co/mokuaj42@gmail.com" className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
