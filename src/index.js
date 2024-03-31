import React from 'react';
import ReactDOM from 'react-dom';
import './style/Style.css';
import './style/style_Education.css';
import './style/style_parcours_pro.css';
import './style/style_projet.css';
import './style/style_footer.css';
import './style/style_bts_sio.css';
import './style/style_certification.css';
import './App.css';





import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
  /* </React.StrictMode> */
);



// reportWebVitals();
