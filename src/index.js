import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/Style.css';
import './style/style_Education.css';
import './style/style_parcours_pro.css';
import './style/style_projet.css';
import './style/style_footer.css';
import './style/style_bts_sio.css';
import './App.css';




import App from './pages/Home';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
