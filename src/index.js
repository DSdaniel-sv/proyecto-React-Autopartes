import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './Router/Router'
import {I18nextProvider} from "react-i18next"
import i18next from 'i18next'
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import Inicio from './Page/Inicio';
import Header from './Components/Header';
i18next.init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {es : {
   global: global_es,
   },
  en: {
    global: global_en,
   },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Router/>
    </I18nextProvider>
  </React.StrictMode>
);
