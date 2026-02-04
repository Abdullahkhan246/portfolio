import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'HTML5', level: '95%' },
        { name: 'CSS3', level: '90%' },
        { name: 'JavaScript', level: '85%' },
        { name: 'React', level: '80%' },
        { name: 'Vite', level: '85%' },
        { name: 'Git', level: '75%' },
        {name: 'Firebase', level: '70%'},
        {name: 'Express.js', level: '60%'},
        {name: 'Mongodb', level: '80%'}
    ];

    return (
        <section className="skills fade-in">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                                <span>{skill.level}</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: skill.level }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
