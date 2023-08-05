self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
  });
  
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
  
  self.addEventListener('fetch', function(event) {
    // Não faz nada - apenas registra o Service Worker
  });
  