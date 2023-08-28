import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/variables.css';
import { App } from './app';

// import i18n (needs to be bundled ;))
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
