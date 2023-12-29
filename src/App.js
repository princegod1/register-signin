// App.js
import React, { useState } from 'react';
import Register from './Register';
import SignIn from './SignIn';
import Services from './Services'; // Import the Services component

const App = () => {
  const [currentPage, setCurrentPage] = useState('Register');

  const navigateToSignIn = () => {
    setCurrentPage('SignIn');
  };

  const navigateToRegister = () => {
    setCurrentPage('Register');
  };

  const navigateToServices = () => {
    setCurrentPage('Services');
  };

  // Render the appropriate component based on the current page
  const renderPage = () => {
    if (currentPage === 'Register') {
      return <Register onSignInClick={navigateToSignIn} onServicesClick={navigateToServices} />;
    } else if (currentPage === 'SignIn') {
      return <SignIn onRegisterClick={navigateToRegister} />;
    } else if (currentPage === 'Services') {
      return <Services onSignInClick={navigateToSignIn} onRegisterClick={navigateToRegister} onServicesClick={navigateToServices} />;
    }

    // Default case, render nothing
    return null;
  };

  return <div>{renderPage()}</div>;
};

export default App;

