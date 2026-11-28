/* Miftāḥ offline support: the page from cache at once, refreshed behind it. Book text is kept by the page itself (localStorage); services are never cached here. */
const CACHE="miftah-v2";
const FILES=["./","index.html","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES).catch(()=>{})));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
  const same=u.origin===self.location.origin, fonts=/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);if(!same&&!fonts)return;
  e.respondWith(caches.open(CACHE).then(c=>c.match(r,{ignoreSearch:same}).then(hit=>{
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==="opaque"))c.put(r,res.clone());return res;}).catch(()=>hit);
    return hit||net;})));});
