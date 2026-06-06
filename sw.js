self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // يمكن تركه فارغاً للتثبيت الأساسي
});
