import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';
import Header from './components/menu/header.jsx';
import waterfallOne from './components/menu/icons/waterfall1.png';
import waterfallTwo from './components/menu/icons/waterfall2.png';

const portfolio = {
  name: 'Hiarimino R.',
  linkedin: 'https://www.linkedin.com/in/hiarimino-ralison-rakotoson-54836b263',
  tagline: 'Software developer, computer scientist, problem-solver, and AI enthusiast.',
  bio: 'I\'m a software developer from Madagascar, now based in the U.S. I build practical software that solves real-world challenges and creates meaningful value. Beyond technology, I enjoy creating both traditional and digital art, including the pieces featured throughout this portfolio. My work ethic is inspired by the Malagasy saying “Aza mandevin-talenta”—don\'t let your talent go to waste— which reminds me to always strive for excellence and to continuously learn and grow.',
  skillGroups: [
    {
      title: 'Frameworks & stack',
      skills: [
        { name: 'React', level: 4 },
        { name: 'Node.js', level: 4 },
        { name: 'REST APIs', level: 3 },
        { name: 'C# / .NET', level: 3 },
        { name: 'Next.js', level: 2 }
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 4 },
        { name: 'Python', level: 4 },
        { name: 'Javascript eXtension', level: 3 },
        { name: 'Java', level: 3 },
        { name: 'SQL', level: 2 }
      ]
    }
  ],
  experience: [
    { role: 'Associate Software Developer', timing: 'Current role' },
    { role: 'Software Development Intern' },
    { role: 'Software Engineering Fellow' }
  ],
  projects: [
    { name: 'Project One', description: 'A short description of a project and the value it created.', technologies: 'React, .NET' },
    { name: 'Project Two', description: 'Another focused case study with a clear outcome.', technologies: 'C#, SQL' }
  ]
};

function App() {
  const [status, setStatus] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus('Sending...');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), message: form.get('message') })
      });
      setStatus(response.ok ? 'Thanks, I will be in touch.' : 'Please add an email and message.');
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus('The API is offline. Please email me directly.');
    }
  }

  return <>
    <Header name="Tongasoa, Bienvenu, Welcome!" />
    <main id="top">
      <section className="hero" style={{ '--waterfall-one': `url(${waterfallOne})`, '--waterfall-two': `url(${waterfallTwo})` }}>
        <p className="eyebrow">Hello, I'm</p>
        <h1>{portfolio.name.replace(/\.$/, '')}<span>.</span></h1>
        <p className="tagline">{portfolio.tagline}</p>
        <a className="button" href="#work">See my work <span aria-hidden="true">↓</span></a>
      </section>
      <section className="section" id="work">
        <div className="section-heading"><p className="eyebrow">Selected work</p><h2>Things I've built.</h2></div>
        <div className="project-grid">{portfolio.projects.map((project, index) => <article className="project" key={project.name}>
          <span className="project-number">0{index + 1}</span><h3>{project.name}</h3><p>{project.description}</p><small>{project.technologies}</small>
        </article>)}</div>
      </section>
      <section className="section about" id="about">
        <div className="section-heading"><p className="eyebrow">A little about me</p><h2>Curious by nature. Creative by practice.</h2></div>
        <div><p className="large-copy">{portfolio.bio.split('Madagascar')[0]}Madagascar <img className="inline-emoticon" src="/hibiscus.svg" alt="Hibiscus" />{portfolio.bio.split('Madagascar')[1]}</p></div>
      </section>
      <section className="section education" id="education">
        <div className="section-heading"><p className="eyebrow">Education</p><h2>What shaped me.</h2></div>
        <div className="education-list">
          <article className="education-item"><span className="project-number">01</span><h3>BS, Computer Science</h3><p>Central Michigan University</p></article>
          <article className="education-item"><span className="project-number">02</span><h3>AA, emphasis in Computer Science</h3><p>Illinois Central College</p></article>
          <article className="education-item"><span className="project-number">03</span><h3>BA, Economics</h3><p>Catholic University of Madagascar</p></article>
        </div>
      </section>
      <section className="section skills-section" id="skills">
        <div className="section-heading"><p className="eyebrow">What I bring</p><h2>Technical skills and experience.</h2></div>
        <div>
          <p className="large-copy">A snapshot of the technologies I use, the areas I am actively developing, and the experience I bring to software projects.</p>
          <div className="skills-groups">
            {portfolio.skillGroups.map((group) => <div className="skills-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => <div className="skill-row" key={skill.name}>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-meter" aria-label={`${skill.name}: ${skill.level} out of 5`}>
                    {Array.from({ length: 5 }, (_, segmentIndex) => <span className={segmentIndex < skill.level ? 'is-filled' : ''} key={segmentIndex} />)}
                  </span>
                </div>)}
              </div>
            </div>)}
          </div>
          <div className="experience-list">
            <h3>Experience</h3>
            {portfolio.experience.map((experience, index) => <p key={experience.role}><span className="project-number">0{index + 1}</span><span>{experience.role}</span>{experience.timing && <small>{experience.timing}</small>}</p>)}
          </div>
        </div>
      </section>
      <section className="contact" id="contact"><div><p className="eyebrow">Get in touch</p><h2>Have a project<br />in mind?</h2><a className="linkedin-link" href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div><form onSubmit={handleSubmit}><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" rows="4" placeholder="Tell me a little about it..." required /></label><button className="button" type="submit">Send message <span aria-hidden="true">↗</span></button>{status && <p className="form-status">{status}</p>}</form></section>
    </main>
    <footer><span>© {new Date().getFullYear()} {portfolio.name}</span><a href="#top">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
