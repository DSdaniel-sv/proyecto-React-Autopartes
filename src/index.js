import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ruteo from '../src/Login/Ruteo';
import Router from './Router/Router'
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router />
    
  </React.StrictMode>
);
