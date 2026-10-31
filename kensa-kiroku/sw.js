// PWAインストール要件を満たすためだけの最小実装（勤怠管理ポータルと同じ方式）。
// キャッシュ戦略は持たない（常に最新のネットワーク応答をそのまま使う）
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {});
