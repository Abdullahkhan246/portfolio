import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Amazon Clone',
            description: 'A responsive dashboard built with HTML and CSS featuring Responsive Design.',
            tags: ['HTML', 'CSS'],
            link: 'https://projects-cwiq.vercel.app'
        },
        
        {
            title: 'E-Commerce Dashboard',
            description: 'A responsive dashboard built with HTML and CSS featuring Responsive Design.',
            tags: ['HTML', 'CSS'],
            link: 'https://e-commerce-ten-amber-57.vercel.app'
        },
        {
            title: 'Netflix Clone',
            description: 'A responsive dashboard built with HTML and CSS featuring Responsive Design.',
            tags: ['HTML', 'CSS'],
            link: 'https://netflix-rust-zeta.vercel.app'
        },
         {
            title: 'Facebook login page',
            description: 'A simple facebook login page clone using tailwind css.',
            tags: ['HTML', 'Tailwind CSS'],
            link: 'https://projects-woad-three.vercel.app'
        },
        {
            title: 'Tic-Tac-Toe',
            description: 'A classic game of Tic-Tac-Toe built with HTML, CSS, and Javascript.',
            tags: ['Javascript', 'HTML/CSS'],
            link: 'https://tic-tac-toe-five-psi-13.vercel.app'
        },
        {
            title: 'Spotify App',
            description: 'A simple spotify app clone using  HTML, CSS and Javascript.',
            tags: ['HTML', 'CSS', 'Javascript'],
            link: 'https://spotify-app-pink-gamma.vercel.app'
        }
       
    ];

    return (
        <section className="projects fade-in">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            {/* <div className="project-img-placeholder"></div> */}
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="btn-small">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
