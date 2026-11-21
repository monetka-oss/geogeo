const CACHE='geo-v1';
const ASSETS=[
  'index.html',
  'Шпаргалка_по_грузинскому_сленгу_и_разговорной_речи.md',
  'Шпаргалка_по_грузинскому_сленгу_и_грамматике_Часть_2_.md',
  'Уличный_грузинский_Респекты_Глаголы_Зал_и_Рынок.md'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
