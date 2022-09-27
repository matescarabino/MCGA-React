import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FormUser from './components/Form/FormUser';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <FormUser/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);