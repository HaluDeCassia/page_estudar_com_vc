"use strict";var precacheConfig=[["/page_estudar_com_vc/index.html","a783e83e7c36b8b064fc45263ea2deee"],["/page_estudar_com_vc/static/css/main.81632cbd.css","3b431c7cf02b3544b53304a212ee255d"],["/page_estudar_com_vc/static/js/main.d1ee7d46.js","424236cd9df0e5321e648d060fdafd02"],["/page_estudar_com_vc/static/media/Norberta-Professora.147c21b1.png","147c21b1b9e8da8ee82c520a2a2ee8c7"],["/page_estudar_com_vc/static/media/fa-brands-400.ae37590a.eot","ae37590ab05e9c625bcabf1759ab9dc2"],["/page_estudar_com_vc/static/media/fa-brands-400.b5f5ef61.woff","b5f5ef6112d693b968ad9d1646eea529"],["/page_estudar_com_vc/static/media/fa-brands-400.c09b5960.ttf","c09b5960237e462582aa7b66411e57d5"],["/page_estudar_com_vc/static/media/fa-brands-400.c971847b.woff2","c971847be1cd6c17abca74025b4f36ae"],["/page_estudar_com_vc/static/media/fa-brands-400.fb0cbe85.svg","fb0cbe85f42e49383ac4764fd3211e66"],["/page_estudar_com_vc/static/media/fa-regular-400.032ba2e0.woff2","032ba2e0f134a35ed87df1564936d352"],["/page_estudar_com_vc/static/media/fa-regular-400.562010a4.woff","562010a46ef5216ac76a08c2ceb99985"],["/page_estudar_com_vc/static/media/fa-regular-400.6bad016c.ttf","6bad016cd4efb36aa82618f55f0f660d"],["/page_estudar_com_vc/static/media/fa-regular-400.c15c758e.svg","c15c758e798dd295b471b69ac409ef02"],["/page_estudar_com_vc/static/media/fa-regular-400.d7de79ca.eot","d7de79cae74b02f2d377786656f1d816"],["/page_estudar_com_vc/static/media/fa-solid-900.10c304f1.eot","10c304f14cd2f6b6bed2ae7f574f03af"],["/page_estudar_com_vc/static/media/fa-solid-900.3f07fd74.ttf","3f07fd745b951055c656cf27db9a31d5"],["/page_estudar_com_vc/static/media/fa-solid-900.9948e588.svg","9948e588ad4ca0db716da1c4d57f900e"],["/page_estudar_com_vc/static/media/fa-solid-900.c9a328cc.woff","c9a328cc89d13b8959e710d82b4b40d1"],["/page_estudar_com_vc/static/media/fa-solid-900.f9b85c94.woff2","f9b85c9463af7103b9b24bbbf09a06ed"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var r="/page_estudar_com_vc/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});