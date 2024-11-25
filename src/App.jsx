import React from 'react';
import { FaGithub } from 'react-icons/fa';

// Functional components for different sections
const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Evan Bourgoine</h1>
            <a
                href="https://github.com/evanbourgoine" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                style={styles.githubLink}
            >
                <FaGithub style={styles.githubIcon} />
            </a>
        </header>
    );
};

const About = () => {
    return (
        <section style={styles.section}>
            <h2>About Me</h2>
            <p>
                I’m a web developer with a passion for building beautiful and functional
                websites.
            </p>
        </section>
    );
};

const Contact = () => {
    return (
        <section style={styles.section}>
            <h2>Contact Me</h2>
            <p>Email: your.email@example.com</p>
        </section>
    );
};

// Main App component
const App = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Contact />
            </main>
        </div>
    );
};

// Styling
const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#003366',
        padding: '1rem 2rem',
        color: '#fff',
    },
    title: {
        margin: 0,
        fontSize: '1.5rem',
    },
    githubLink: {
        textDecoration: 'none',
    },
    githubIcon: {
        fontSize: '2rem',
        color: '#fff',
        transition: 'color 0.3s ease',
    },
    section: {
        padding: '2rem',
        textAlign: 'center',
    },
};

export default App;
