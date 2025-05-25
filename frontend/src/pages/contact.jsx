import '../css/contact.css';
import React, { useState, useEffect } from 'react';


function ContactPage() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>For inquiries, please email us at: 
                <a href="mailto:niklopez4102@gmail.com"> tacomyfriend@gmail.com</a> 
            </p>
            <form
                action="mailto:niklopez4102@gmail.com"
                method="GET"
                encType="text/plain"
                >
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Message:
                    <textarea>
                        Please enter your message here...
                    </textarea>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ContactPage;
