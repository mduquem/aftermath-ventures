import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const app = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
