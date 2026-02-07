import React from 'react';
import './About.css';
import resume from '../../assets/Abdullah Resume.pdf';

const About = () => {
    return (
        <section className="about fade-in">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Full-Stack Developer based in Pakistan</h3>
                        <p>
                            I am a passionate Full-Stack developer with a keen eye for detail and a love for creating beautiful, functional websites.
                            Completed a one-year Website Development program at Saylani Institute, with hands-on experience building multiple real-world projects.
                        </p>
                        <p>
                            I focus on writing clean, maintainable code and building responsive user interfaces.
                        </p>
                        <div className="info-box">
                            <div className="info-item">
                                <span className="info-title">From:</span>
                                <span className="info-desc">Pakistan</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Language:</span>
                                <span className="info-desc">English, Urdu, German</span>
                            </div>
                            <div className="info-item">
                                <span className="info-title">Freedom:</span>
                                <span className="info-desc">Available for Freelance</span>
                            </div>
                        </div>
                        <a href={resume} download="Abdullah_Resume.pdf"><button className="btn">Download CV</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
