/* eslint-disable no-undef, no-restricted-globals */
import { precacheAndRoute } from 'workbox-precaching';


// Esperamos al evento "install" para confirmar que el service-worker se ha
// instalado.
self.addEventListener('install', (event) => {
    console.log("El service worker ha sido instalado!");

});

//Inicializamos workbox
precacheAndRoute(self.__WB_MANIFEST);

// Evento activate
self.addEventListener('activate', function (e) {
    console.log('activado!');
});

// Evento de mensajes
self.addEventListener('message', (e) => {
    // Comprobamos que la acción sea la de saltar
    // el estado de espera
    if (e.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});