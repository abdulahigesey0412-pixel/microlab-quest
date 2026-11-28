/* Miftāḥ offline support: the page from cache at once, refreshed behind it. Book text is kept by the page itself (localStorage); services are never cached here. */
const CACHE="miftah-v3";
const FILES=["./","index.html","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"].concat(["fonts/Amiri-0bf41955.woff2", "fonts/Amiri-202e96cd.woff2", "fonts/Amiri-5ed9bd83.woff2", "fonts/Amiri-64a948bf.woff2", "fonts/Amiri-967a6925.woff2", "fonts/Amiri-b2ed8126.woff2", "fonts/IBMPlexSans-05d29bfe.woff2", "fonts/IBMPlexSans-118b756c.woff2", "fonts/Newsreader-7a09be03.woff2", "fonts/Newsreader-7ab0b816.woff2", "fonts/Newsreader-7abfa560.woff2", "fonts/Newsreader-f0c28dac.woff2", "fonts/fonts.css"]);
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES).catch(()=>{})));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
  const same=u.origin===self.location.origin;if(!same)return;
  e.respondWith(caches.open(CACHE).then(c=>c.match(r,{ignoreSearch:same}).then(hit=>{
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==="opaque"))c.put(r,res.clone());return res;}).catch(()=>hit);
    return hit||net;})));});
