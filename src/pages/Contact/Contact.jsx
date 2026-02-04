import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact fade-in">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-container">
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>

                    <div className="contact-info">
                        <div className="info-card">
                            <h3>Email</h3>
                            <p>madthedev3@gmail.com</p>
                        </div>
                        <div className="info-card">
                            <h3>Socials</h3>
                            <div className="social-links">
                                <a href="https://github.com/Abdullahkhan246" target='_blank'><span>GitHub</span></a>
                                <a href="https://www.linkedin.com/in/abdullahdurrani246/" target='_blank'><span>LinkedIn</span></a>
                                <a href="https://x.com/AbdullahD61736" target='_blank'><span>Twitter</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
