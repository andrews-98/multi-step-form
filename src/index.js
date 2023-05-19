import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from './context/serviceContext';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

