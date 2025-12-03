import React, { useState, useRef } from 'react';
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

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

    alert('Message sent!');
    setFormData({
      name: '',
      email: '',
      type: 'General Inquiry',
      message: ''
    });
  } catch (error) {
    console.error('FAILED...', error);
    alert('Failed to send message.');
  }
};

return (
    <>
      <div className='welcome-note'>
        <h1>Request Catering and Give feedback!</h1>
        <p>
          Have a comment, suggestion, or a way we could improve our service?
          Looking for a way to cater your next event? Want to see your favorite
          sandwich on our menu? Let us know!
        </p>
        <p className='fillOut'>
          Fill out the form below and we will get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-container">
        <h2>Contact / Catering Request</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Inquiry Type:
            <select name="type" value={formData.type} onChange={handleChange}>
              <option>General Inquiry</option>
              <option>Catering</option>
              <option>Compliment</option>
              <option>Complaint</option>
            </select>
          </label>

          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button type="submit">Send!</button>
        </form>
      </div>
    </>
  );
}
export default ContactPage;
