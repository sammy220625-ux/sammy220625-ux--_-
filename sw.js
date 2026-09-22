// Service Worker แบบเบาที่สุด
// ไม่แคชไฟล์ใด ๆ
// ช่วยให้ Chrome ติดตั้งเว็บเป็นแอปได้

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener("fetch", () => {
  // ไม่ทำอะไร
  // ปล่อยให้ Browser จัดการ Network ตามปกติ
});
