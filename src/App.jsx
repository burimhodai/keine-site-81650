import React from 'react';

const App = () => {
  const styles = {
    appContainer: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#F6F8D5',
      color: '#333',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      backgroundColor: '#4F959D',
      padding: '20px',
      color: '#F6F8D5',
      textAlign: 'center',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
    },
    navItem: {
      margin: '0 15px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#F6F8D5',
      fontWeight: 'bold',
    },
    main: {
      flex: 1,
      padding: '20px',
    },
    heroSection: {
      textAlign: 'center',
      padding: '50px 20px',
    },
    heroTitle: {
      fontSize: '3em',
      marginBottom: '20px',
      color: '#205781',
    },
    heroSubtitle: {
      fontSize: '1.5em',
      marginBottom: '30px',
    },
    button: {
      backgroundColor: '#205781',
      color: '#F6F8D5',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.2em',
      cursor: 'pointer',
    },
    featuresSection: {
      padding: '50px 20px',
      backgroundColor: '#E8EAD3',
    },
    featuresTitle: {
      fontSize: '2em',
      marginBottom: '30px',
      textAlign: 'center',
    },
    featureList: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    featureItem: {
      width: '30%',
      padding: '20px',
      backgroundColor: '#F6F8D5',
      borderRadius: '10px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    footer: {
      backgroundColor: '#4F959D',
      color: '#F6F8D5',
      textAlign: 'center',
      padding: '20px',
    },
  };

  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <h1>Market Landing</h1>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Features</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main style={styles.main}>
        <section id="hero" style={styles.heroSection}>
          <h2 style={styles.heroTitle}>Unlock Your Market Potential</h2>
          <p style={styles.heroSubtitle}>Revolutionize your marketing strategy with our innovative platform.</p>
          <button style={styles.button}>Get Started</button>
        </section>
        <section id="features" style={styles.featuresSection}>
          <h2 style={styles.featuresTitle}>Key Features</h2>
          <div style={styles.featureList}>
            <div style={styles.featureItem}>
              <h3>Feature 1</h3>
              <p>Description of feature 1.</p>
            </div>
            <div style={styles.featureItem}>
              <h3>Feature 2</h3>
              <p>Description of feature 2.</p>
            </div>
            <div style={styles.featureItem}>
              <h3>Feature 3</h3>
              <p>Description of feature 3.</p>
            </div>
          </div>
        </section>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2024 Market Landing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;