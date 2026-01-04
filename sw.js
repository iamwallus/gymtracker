self.addEventListener('install', e=>{self.skipWaiting();});
self.addEventListener('activate', e=>{clients.claim();});
self.addEventListener('fetch', e=>{}); // can cache later for offline
