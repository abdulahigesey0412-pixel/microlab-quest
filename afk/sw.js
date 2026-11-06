/* AFK Quest offline support: serve from cache instantly, refresh from the network in the background. */
const CACHE="afkq-v1";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","index.html","curriculum.js","features.js","manifest.webmanifest"]).catch(()=>{})));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
  const same=u.origin===self.location.origin, fonts=/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);if(!same&&!fonts)return;
  e.respondWith(caches.open(CACHE).then(c=>c.match(r,{ignoreSearch:same&&u.pathname.endsWith(".js")}).then(hit=>{
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==="opaque"))c.put(r,res.clone());return res;}).catch(()=>hit);
    return hit||net;})));});
