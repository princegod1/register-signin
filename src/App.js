// App.js
import React, { useState } from 'react';
import Register from './Register';
import SignIn from './SignIn';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Register');

  const navigateToSignIn = () => {
    setCurrentPage('SignIn');
  };

  const navigateToRegister = () => {
    setCurrentPage('Register');
  };

  return (
    <div>
      {currentPage === 'Register' && <Register onSignInClick={navigateToSignIn} />}
      {currentPage === 'SignIn' && <SignIn onRegisterClick={navigateToRegister} />}
    </div>
    
  );
};

export default App;
