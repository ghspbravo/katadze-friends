"use strict";var precacheConfig=[["/katadze-friends/index.html","23792f3ec8f10b4495ba34a154ec14b2"],["/katadze-friends/static/css/main.18a988fa.css","630e79373c51216f4a5f85faf0c09db1"],["/katadze-friends/static/js/main.746cbb44.js","177bb0eb876e6522e6873972fbdde3ec"],["/katadze-friends/static/media/BebasNeueBook.22a53d25.ttf","22a53d2503def617f3ce644452bce0ae"],["/katadze-friends/static/media/BebasNeueRegular.463e6ede.otf","463e6edea05816ef8a5ba91397a96b8c"],["/katadze-friends/static/media/LogoBlack.ff9614f1.png","ff9614f19fb7890e09d9d424eb34438e"],["/katadze-friends/static/media/LogoBlackLabel.e349d00c.png","e349d00c48858c106a15230a711a424e"],["/katadze-friends/static/media/LogoWhite.cfd3a684.png","cfd3a68421e7ab05094b60bdd5ceffbb"],["/katadze-friends/static/media/LogoWhiteLabel.d1212d61.png","d1212d616d99a4a360001c36c2f366d0"],["/katadze-friends/static/media/OpenSans.629a55a7.ttf","629a55a7e793da068dc580d184cc0e31"],["/katadze-friends/static/media/OpenSansBold.50145685.ttf","50145685042b4df07a1fd19957275b81"],["/katadze-friends/static/media/OpenSansExtraBold.8bac22ed.ttf","8bac22ed4fd7c8a30536be18e2984f84"],["/katadze-friends/static/media/OpenSansLight.1bf71be1.ttf","1bf71be111189e76987a4bb9b3115cb7"],["/katadze-friends/static/media/aboutus.406f696d.jpg","406f696d229291bdf929eb196f64d941"],["/katadze-friends/static/media/gids.47b6bb55.jpg","47b6bb55515ae053d17233cef604e4a4"],["/katadze-friends/static/media/header-image.0ad5cf59.jpg","0ad5cf59664bdd1cd450d402765355d2"],["/katadze-friends/static/media/header-image.4fcae5f2.png","4fcae5f2c7fd2cc7a592fde7de92eaaf"],["/katadze-friends/static/media/header-image.6b1afe87.jpg","6b1afe878f6b61bd17753dfd2a923a8c"],["/katadze-friends/static/media/header-image.e2d2c46a.png","e2d2c46aff795ce21d655ef3c55961ae"],["/katadze-friends/static/media/header-image.eb894d44.png","eb894d44e316b019593bee306f1b30c2"],["/katadze-friends/static/media/party.ca0a27e6.jpg","ca0a27e6799209505ec2124577039d0f"],["/katadze-friends/static/media/team-member.234fad85.png","234fad85a27a3ea9619eef29cdb78104"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/katadze-friends/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});