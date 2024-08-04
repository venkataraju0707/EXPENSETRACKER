// Example of a simple login handler (could be in a modal or separate page)
import React from 'react';
import { useAuth } from '../AuthContext';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    // Perform login logic (e.g., API call)
    login();
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
