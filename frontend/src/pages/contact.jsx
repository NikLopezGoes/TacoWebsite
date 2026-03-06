import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css'; // your existing CSS

function ContactPage() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    if (status !== 'sent') return;
    const t = window.setTimeout(() => setStatus('idle'), 6000);
    return () => window.clearTimeout(t);
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    try {
      await emailjs.send(
        'service_4akrb2a',
        'template_s467k51',
        {
          name: formData.name,
          email: formData.email,
          type: formData.type,
          message: formData.message,
          time: new Date().toLocaleString()
        },
        'Qt-5_PzL_-O4WaY7e'
      );

      setStatus('sent');
      setFormData({
        name: '',
        email: '',
        type: 'General Inquiry',
        message: ''
      });
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
    }
  };

  return (
    <>
      <div className="contactPage">
        <section className="contactHero">
          <div className="contactHeroInner">
            <h1 className="contactTitle">Contact & Catering</h1>
            <p className="contactSubtitle">
              Got feedback, questions, or want us at your next event? Send a note and we’ll get back to you soon.
            </p>
          </div>
        </section>

        <section className="contactMain" aria-label="Contact form and info">
          <div className="contactGrid">
            <aside className="contactInfoCard">
              <h2 className="contactCardTitle">Get in touch</h2>
              <p className="contactCardText">
                Fastest way to reach us is email. For catering, include the date, location, and an estimated headcount.
              </p>

              <div className="contactInfoList">
                <div className="contactInfoItem">
                  <div className="contactInfoLabel">Email</div>
                  <a className="contactInfoValue" href="mailto:tacomyfriend@gmail.com">tacomyfriend@gmail.com</a>
                </div>
                <div className="contactInfoItem">
                  <div className="contactInfoLabel">Phone</div>
                  <a className="contactInfoValue" href="tel:5075258243">(507) 525-8243</a>
                </div>
              </div>

              <div className="contactPills" aria-label="Common topics">
                <span className="contactPill">Catering</span>
                <span className="contactPill">Events</span>
                <span className="contactPill">Feedback</span>
              </div>
            </aside>

            <div className="contactFormCard">
              <h2 className="contactCardTitle">Send a message</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="contactForm">
                <div className="contactRow">
                  <div className="contactField">
                    <label className="contactLabel" htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="contactField">
                    <label className="contactLabel" htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="contactField">
                  <label className="contactLabel" htmlFor="contact-type">Inquiry type</label>
                  <select id="contact-type" name="type" value={formData.type} onChange={handleChange}>
                    <option>General Inquiry</option>
                    <option>Catering</option>
                    <option>Compliment</option>
                    <option>Complaint</option>
                  </select>
                </div>

                <div className="contactField">
                  <label className="contactLabel" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us what you’re thinking…"
                  />
                  <div className="contactHint">
                    Catering tip: include date/time, address/city, and estimated number of guests.
                  </div>
                </div>

                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <div className="contactActions">
                  <button type="submit" className="contactSubmit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>

                  <p
                    className={`contactStatus contactStatus--${status}`}
                    role="status"
                    aria-live="polite"
                  >
                    {status === 'sent' && 'Thanks! Your message was sent.'}
                    {status === 'error' && 'Sorry—something went wrong. Please try again or email us directly.'}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default ContactPage;
