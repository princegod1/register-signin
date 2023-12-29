import React, { useState } from 'react';


const Services = ({ onRegisterClick, onSignInClick, onServicesClick }) => {
    const navigateToSignIn = () => {
        onSignInClick(); // Use the onSignInClick prop to navigate to the Sign In page
      };
    
      const navigateToRegister = () => {
        onRegisterClick(); // Use the onRegisterClick prop to navigate to the Register page
      };
    
      const navigateToServices = () => {
        onServicesClick();
      };


  return (
    <div style={styles.body}>
      <div style={styles.header}>
      <div>
          <button style={styles.button} onClick={onSignInClick}>
            Login
          </button>
          <button style={styles.button} onClick={onRegisterClick}>
            Register
          </button>
        </div>
        <div>
          <img src="img1.jpeg" alt="Logo" style={styles.logo} />
        </div>
        <div>
          <button style={styles.button}>Home</button>
          <button style={styles.button}>Hotels</button>
          <button style={styles.button}>RV</button>
          <button style={styles.button}>Contact Us</button>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>Our Services</h2>
        <p style={styles.p}>Discover the services we offer to make your experience exceptional.</p>

        <div style={styles.serviceItem}>
          <h3 style={styles.serviceTitle}>Service 1</h3>
          <p style={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis in dolor
            pharetra pharetra.
          </p>
        </div>

        <div style={styles.serviceItem}>
          <h3 style={styles.serviceTitle}>Service 2</h3>
          <p style={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis in dolor
            pharetra pharetra.
          </p>
        </div>

        <div style={styles.serviceItem}>
          <h3 style={styles.serviceTitle}>Service 3</h3>
          <p style={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis in dolor
            pharetra pharetra.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px',
  },
  logo: {
    maxWidth: '100px',
  },
  button: {
    borderRadius: '25px',
    padding: '10px',
    margin: '0 5px',
    fontSize: '16px',
    backgroundColor: 'grey',
    color: 'white',
    textDecoration: 'none',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    textAlign: 'center',
  },
  h2: {
    fontSize: '28px',
    margin: '10px 0',
  },
  p: {
    fontSize: '20px',
  },
  serviceItem: {
    margin: '20px 0',
    maxWidth: '600px',
  },
  serviceTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  serviceDescription: {
    fontSize: '18px',
  },
};

export default Services;







