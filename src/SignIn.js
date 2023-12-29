import React, { useState } from 'react';

const SignIn = ({ onRegisterClick, onSignInClick }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // You can perform additional checks or validations here if needed
    setSelectedImage(file);
  };

    const navigateToRegister = () => {
      // Call the function passed as a prop to handle the navigation to the Register page
      onRegisterClick();
    };
    const navigateToSignIn = () => {
      onSignInClick(); // Use the onSignInClick prop to navigate to the Sign In page
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
        <h2 style={styles.h2}>Sign in</h2>
        <p style={styles.p}>Use this form to sign into your account</p>

        <div style={styles.profilePic}>
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Profile"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          ) : (
            <span>Select an image</span>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ margin: '10px 0' }}
        />


        <div style={styles.profilePic}></div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="username">Username:</label>
          <input style={styles.input} type="text" id="username" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="password">Password:</label>
          <input style={styles.input} type="password" id="password" />
        </div>

        <p style={styles.signInLink}>
          Don't have an account?{' '}
          <span onClick={navigateToRegister} style={styles.a}>
            Sign up
          </span>
        </p>

        <button style={styles.submitBtn}>Submit</button>
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
    maxWidth: '100px', // Adjust this value to increase or decrease the image size
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
  profilePic: {
    width: '150px',
    height: '150px',
    backgroundColor: 'gray',
    borderRadius: '50%',
    margin: '20px 0',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0',
  },
  label: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  input: {
    padding: '15px',
    borderRadius: '25px',
    marginTop: '5px',
    width: '300px',
    fontSize: '16px',
  },
  signInLink: {
    fontSize: '18px',
    margin: '10px 0',
  },
  submitBtn: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '25px',
    cursor: 'pointer',
    marginTop: '20px',
    fontSize: '18px',
  },
};

export default SignIn;
