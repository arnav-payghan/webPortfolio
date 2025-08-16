import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Remove HTML loader once React is mounted
const loader = document.getElementById('loader');
if (loader) {
  loader.style.display = 'none';
}
