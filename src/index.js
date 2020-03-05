import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//Pollyfils
import "@babel/polyfill";

import 'whatwg-fetch';

ReactDOM.render(
  <main>
    <App />
  </main>,
  document.getElementById("root")
);


// Comprobamos que el navegador lo soporte:
if ('serviceWorker' in navigator) {
  // Esperamos a que cargue la web
  window.addEventListener('load', () => {
    // Intentamos instalar el Service worker
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // Se ha registrado correctamente
      console.log('El service worker SW se ha registrado correctamente: ', registration.scope);
    }, (err) => {
      // registration failed :(
      console.log('El registro de SW ha fallado :(', err);
    });
  });
}