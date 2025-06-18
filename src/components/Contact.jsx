import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-info">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        <form action="https://formsubmit.co/mokuaj42@gmail.com" method="POST"  className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" required>
          <input type="email" name="email" required>
          <textarea name="message" required></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}
