import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-title">
          <span>Get In Touch</span>
          <h2>Contact</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-links">
            <a href="mailto:rommantayyabcs@gmail.com">
              <span>Email</span>
              <span>rommantayyabcs@gmail.com</span>
            </a>
            <a href="https://github.com/rommantayyab" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <span>rommantayyab</span>
            </a>
            <a href="https://www.linkedin.com/in/romman-tayyab-567623418" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <span>View Profile</span>
            </a>
            <a href="https://www.kaggle.com/rommantayyab" target="_blank" rel="noreferrer">
              <span>Kaggle</span>
              <span>View Profile</span>
            </a>
            <a href="https://www.producthunt.com/@rommantayyab" target="_blank" rel="noreferrer">
              <span>Product Hunt</span>
              <span>View Profile</span>
            </a>
          </div>

          <div className="form-box" style={{ padding: "40px" }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                  Send Message
                </button>
              </form>
            ) : (
              <div className="submit-msg">Your message has been sent. We'll get back to you soon.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;