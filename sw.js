// sw.js — Service Worker ພື້ນຖານ ເພື່ອໃຫ້ browser ຮັບຮູ້ວ່າເວັບນີ້ຕິດຕັ້ງເປັນແອັບໄດ້ (PWA installable)
// ບໍ່ໄດ້ເຮັດ offline cache ຫຍຸ້ງຍາກ, ພຽງແຕ່ pass-through ທຸກ request

const CACHE_NAME = 'clinic-app-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // pass-through ທຳມະດາ (ບໍ່ cache) — ພຽງພໍໃຫ້ Chrome ຖືວ່າເປັນ PWA ທີ່ຕິດຕັ້ງໄດ້
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
