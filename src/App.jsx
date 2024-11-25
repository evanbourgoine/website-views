import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Page Components
const Home = () => (
    <div style={styles.page}>
        <h2>Welcome to My Website</h2>
        <p>This is the home page.</p>
    </div>
);

const Projects = () => (
    <div style={styles.page}>
        <h2>My Projects</h2>
        <p>Here is a list of my projects.</p>
    </div>
);

const App = () => {
    return (
        <Router>
            {/* Header with Navigation */}
            <header style={styles.header}>
                <h1 style={styles.title}>My Website</h1>
                <nav style={styles.nav}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                    <Link to="/projects" style={styles.navLink}>Projects</Link>
                </nav>
            </header>

            {/* Routes */}
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </main>
        </Router>
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
    },
    nav: {
        display: 'flex',
        gap: '1rem',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.2rem',
    },
    page: {
        padding: '2rem',
        textAlign: 'center',
    },
};

export default App;