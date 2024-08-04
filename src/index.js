import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // If you have global styles
import { AuthProvider } from './AuthContext';

const container = document.getElementById('root');

// Create a root.
const root = createRoot(container);

// Initial render: Render the application
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
