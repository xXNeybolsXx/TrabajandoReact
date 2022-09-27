import React from 'react';
import ReactDOM from 'react-dom/client';
import {Brandon} from './Componente/Brandon.js';
import {MenuPrincipal} from './Componente/Menu.js';
import { Banner } from './Banner/Banner.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <MenuPrincipal/>
    <Banner/>
    
  </React.StrictMode>
);