import React from 'react';
import './styles.css';
import lighthouseImage from './assets/lighthouse.jpg';
import profilePhoto from './assets/profile.png';

const App = () => {
    return (
        <div style={styles.container}>

            <header className="App-header">
                 <img src={profilePhoto} className="profile-photo" alt="My Photo" />
                 <p className="profile-text">Hello! I'm Evan Bourgoine - A Computer Science Student at Virginia Tech</p>
            </header>

            {/* Card 1 */}
            <div style={styles.card}>
                <img 
                    src={lighthouseImage}
                    alt="Lighthouse" 
                    style={styles.image} 
                />
                <div style={styles.text}>
                    <h3>Card Title</h3>
                    <p>Some description about this card.</p>
                </div>
            </div>

            {/* Card 2 */}
            <div style={styles.card}>
                <img 
                    src="https://via.placeholder.com/300x200" 
                    alt="Placeholder" 
                    style={styles.image} 
                />
                <div style={styles.text}>
                    <h3>Another Card</h3>
                    <p>Description for another card goes here.</p>
                </div>
            </div>

            {/* Add more cards as needed */}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '300px',
        overflow: 'hidden',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 'auto',
    },
    text: {
        padding: '1rem',
    },
};

export default App;