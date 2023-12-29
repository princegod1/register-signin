import React, { useState } from 'react';

const Register = ({ onSignInClick, onRegisterClick }) => {
  const [gender, setGender] = useState('Male');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const navigateToSignIn = () => {
    onSignInClick(); // Use the onSignInClick prop to navigate to the Sign In page
  };

  const navigateToRegister = () => {
    onRegisterClick(); // Use the onRegisterClick prop to navigate to the Register page
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
    button: {
      borderRadius: '25px',
      padding: '10px',
      margin: '0 5px',
      fontSize: '16px',
      backgroundColor: 'grey',
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    logo: {
      maxWidth: '50px',
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
      backgroundImage: `url(${selectedImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
    genderGroup: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '10px',
    },
    customRadio: {
      marginLeft: '5px', // Adjust the spacing between radio buttons and labels
    },
    customRadioLabel: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '10px', // Adjust the spacing between labels
      cursor: 'pointer',
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
    signInLink: {
      fontSize: '18px',
      margin: '10px 0',
    },
    a: {
      color: 'blue',
      textDecoration: 'none',
    },
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
          <img src="images/img1.jpeg" alt="Logo" style={styles.logo} />
        </div>
        <div>
          <button style={styles.button}>Home</button>
          <button style={styles.button}>Hotels</button>
          <button style={styles.button}>RV</button>
          <button style={styles.button}>Contact Us</button>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.h2}>New User?</h2>
        <p style={styles.p}>Use this form to create your account</p>

       

        <div style={styles.profilePic}></div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="fullName">
            Full Name:
          </label>
          <input style={styles.input} type="text" id="fullName" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">
            E-mail:
          </label>
          <input style={styles.input} type="email" id="email" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="username">
            Username:
          </label>
          <input style={styles.input} type="text" id="username" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input style={styles.input} type="tel" id="phoneNumber" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Gender:</label>
          <div style={styles.genderGroup}>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              style={styles.customRadio}
              checked={gender === 'Male'}
              onChange={handleGenderChange}
            />
            <label htmlFor="male" style={styles.customRadioLabel}>
              Male
            </label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              style={styles.customRadio}
              checked={gender === 'Female'}
              onChange={handleGenderChange}
            />
            <label htmlFor="female" style={styles.customRadioLabel}>
              Female
            </label>
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="nationality">
            Nationality:
          </label>
          <select style={styles.input} id="nationality">
            <option value="Spain">Spain</option>
            <option value="Turkey">Turkey</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Palestine">Palestine</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="password">
            Password (8 or more characters):
          </label>
          <input style={styles.input} type="password" id="password" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input style={styles.input} type="password" id="confirmPassword" />
        </div>

        <p style={styles.signInLink}>
          Don't have an account?{' '}
          <span onClick={navigateToSignIn} style={styles.a}>
            Sign in
          </span>
        </p>

        <button style={styles.submitBtn}>Submit</button>
      </div>
    </div>
  );
};

export default Register;

