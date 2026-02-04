import React from 'react';
import './Home.css';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <section className="home fade-in">
            <div className="container home-container">
                <div className="home-content">
                    <h3>Hello, It's Me</h3>
                    <h1>Abdullah Durrani</h1>
                    <h3>And I'm a <span>Full Stack Developer</span></h3>
                    <p>
                        I build professional, responsive, and user-friendly websites using modern technologies.
                    </p>
                    <div className="home-social">
                        {/* Add social icons here */}
                    </div>
                    <Link to={'/contact'}><button className="btn">Hire Me</button></Link>

                </div>
                
            </div>
        </section>
    );
};

export default Home;
