"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Email configuration missing. Check your .env.local file.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        { publicKey }
      );

      setStatus("Message sent successfully! Thank you for contacting me.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  const contactEmail = "paruchuruvyshnavi87@gmail.com";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <header className="contact-heading">
          <span className="contact-eyebrow">LET'S BUILD SOMETHING</span>
          <h2>
            Get in <span>Touch.</span>
          </h2>
          <p>
            Have an idea, opportunity, or project in mind?
            Let's start a conversation.
          </p>
        </header>

        <div className="terminal-window">
          <div className="terminal-topbar">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="terminal-title">connect.terminal</span>
            <span className="terminal-status">
              <i /> ONLINE
            </span>
          </div>

          <div className="terminal-body">
            <div className="terminal-intro">
              <p className="terminal-command">
                <span>visitor@portfolio:~$</span> connect_with_vyshnavi
              </p>

              <h3>
                Let's make
                <br />
                <span>ideas happen.</span>
              </h3>

              <p className="terminal-description">
                I'm open to discussing opportunities, creative projects,
                and collaborations.
              </p>

              <div className="terminal-divider" />

              <p className="terminal-label">AVAILABLE CHANNELS</p>

              <a
                className="contact-channel"
                href={`mailto:${contactEmail}`}
              >
                <span className="channel-icon">@</span>
                <span>
                  <small>EMAIL</small>
                  <strong>{contactEmail}</strong>
                </span>
                <span className="channel-arrow">↗</span>
              </a>

              <a
                className="contact-channel"
                href="https://github.com/paruchuruvyshnavi"
                target="_blank"
                rel="noreferrer"
              >
                <span className="channel-icon">⌘</span>
                <span>
                  <small>GITHUB</small>
                  <strong>Explore my repositories</strong>
                </span>
                <span className="channel-arrow">↗</span>
              </a>

              <a
                className="contact-channel"
                href="https://www.linkedin.com/in/paruchuru-vyshnavi-583a47340?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                <span className="channel-icon">in</span>
                <span>
                  <small>LINKEDIN</small>
                  <strong>Connect professionally</strong>
                </span>
                <span className="channel-arrow">↗</span>
              </a>
            </div>

            <div className="terminal-form-panel">
              <p className="form-path">
                <span>~/messages/</span> new_message.ts
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-heading">
                  <span>01</span>
                  <h3>Send a message</h3>
                </div>

                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your idea..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <button
                  className="terminal-submit"
                  type="submit"
                  disabled={isSending}
                >
                  <span>➤</span>
                  {isSending ? "Sending..." : "Send Message"}
                  <span className="submit-arrow">↗</span>
                </button>

                <p className="form-note">
                  <span>*</span> Your message will be sent directly
                  through the contact form.
                </p>

                {status && (
                  <p className="contact-status" role="status">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="terminal-footer">
            <span>STATUS: READY TO CONNECT</span>
            <span>BUILT WITH CREATIVITY ✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}