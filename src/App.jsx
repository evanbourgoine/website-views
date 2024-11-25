import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Page Components
const Home = () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Welcome to My Website</h2>
        <p>This is the home page.</p>
    </div>
);

const Projects = () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>My Projects</h2>
        <p>Here is a list of my projects.</p>
    </div>
);

const App = () => {
    const [hovered, setHovered] = useState(null);

    const linkStyle = (link) => ({
        color: hovered === link ? '#ff6347' : '#fff',
        textDecoration: 'none',
        fontSize: '1.2rem',
        padding: '0.5rem',
    });

    return (
        <Router>
            <header style={styles.header}>
                <h1 style={styles.title}>My Website</h1>
                <nav style={styles.nav}>
                    <Link
                        to="/"
                        style={linkStyle('home')}
                        onMouseEnter={() => setHovered('home')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        style={linkStyle('projects')}
                        onMouseEnter={() => setHovered('projects')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        Projects
                    </Link>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </main>
        </Router>
    );
};

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
    },
    nav: {
        display: 'flex',
        gap: '1rem',
    },
};

export default App;