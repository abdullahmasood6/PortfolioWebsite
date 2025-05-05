import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

/* add the "loaded" class once everything (css/images/js) is ready */
window.addEventListener('load', () => document.body.classList.add('loaded'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
