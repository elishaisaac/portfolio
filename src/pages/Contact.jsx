import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY || "");
    formData.append("subject", "New portfolio contact message");
    formData.append("from_name", "Elisha's Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        setStatus({
          type: "success",
          message: "Thanks! Your message has been sent successfully."
        });
      } else {
        throw new Error(data.message || "Unable to send your message.");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again."
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Have a project in mind?</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-lead">
              I’m open to internships, junior developer roles, freelance
              projects, and useful collaborations.
            </p>

            <div className="contact-item">
              <span>LOCATION</span>
              <strong>Lahore, Punjab, Pakistan</strong>
            </div>

            <div className="contact-item">
              <span>SPECIALIZATION</span>
              <strong>Full Stack Web Development</strong>
            </div>

            <div className="contact-item">
              <span>STACK</span>
              <strong>React · Node.js · Express · MongoDB</strong>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" placeholder="write your message here..." rows="7" required />

            <input type="checkbox" name="botcheck" className="botcheck" tabIndex="-1" autoComplete="off" />

            {status.message && (
              <p className={`form-status ${status.type}`} role="status">
                {status.message}
              </p>
            )}

            <button type="submit" className="btn primary-btn" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>

            {!WEB3FORMS_ACCESS_KEY && (
              <small className="setup-note">
                Add VITE_WEB3FORMS_ACCESS_KEY to your .env file before testing the form.
              </small>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
