import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './Components/App';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom';



// ReactDOM.render(
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
// , document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();