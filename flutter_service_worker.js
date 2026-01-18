'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "29f81c10e09575aa4f275830dc25d3e6",
".git/config": "413dd1209ccc8ac37dcc8ff69dd0090c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5fd52da6a12802176013e3b577aa82de",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dc90760797ea066775ded3922ee7086a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "09c3982071127dc8266fb8a344a28e23",
".git/logs/refs/heads/master": "09c3982071127dc8266fb8a344a28e23",
".git/logs/refs/remotes/origin/HEAD": "28be8b6903e73b62700b0bb1e47afa46",
".git/logs/refs/remotes/origin/main": "f7a8f2e7236b8b16495836d381e2a21f",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/fec98bf3ef3974d06adea980d24641a80c0a4f": "4f57f2e424c14c72962924bb6155f605",
".git/objects/09/f5d2d37c322ba0e06264b2ae5821478503eb38": "ea6dea2d94387ff825bc57c8c05fa2fc",
".git/objects/0b/3954d3a2bec851d83d4fe8a72685774df529f7": "43dbea428e3f6d142ea9e99c2b875b07",
".git/objects/10/72782d17e8070923458b59e4b6cc02589e5c83": "c96c4d97ecda9ca3c0cd8511eb8185df",
".git/objects/13/23cdac34c6ae8f7e1f8a2f3adc299eae7bdcea": "14c53dcf389f9fd3a26d012494e074b7",
".git/objects/13/4b1698ace398c1a3dd36a2dc0eb1df50280900": "7afccc671ebafce9ae183b4c8399e725",
".git/objects/16/0fb1a5994cdc2e41997a3a6b13d1ba0113305f": "21cfca3eb433fb12abf38648b9a06120",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/28/9f2b8ccaebaa79190ce1f984afa4b9219bfe99": "c683b37d7905feacff39196959ddc8d6",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/764fbf485481f904616d35d816fdd24cfd0f00": "622a47e01442ee72804a35b7ac708263",
".git/objects/37/434d76b201e744d3fb8a9c499dabaa3b5b2024": "3b1cda048b441111436ee5bd21f93ab5",
".git/objects/38/648849dd1928e390db158d36ce7babf4374087": "cdd085c4af1053dcc7cf499071a31d1d",
".git/objects/3c/f768d802ffb2d4a2b08a6754b015b48d0f0195": "17549fc8d8cfd41e95c54654efafa741",
".git/objects/41/ce4a81a84998e91476d10f40de6a6a4f82b8f1": "43896f9047fe52af8d0b3e1459e2671a",
".git/objects/49/38a04f2c445f57957a7654711de29de7cd3533": "2de2a95253e40dd25eaeb4960ce2beab",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/64/08667771d2e770ed2fb67fb0773c1740c29e54": "3b3dae5ff2474dab76726ff3000ee5ab",
".git/objects/68/72c934b32ba597672e1ce985faa71304446a8c": "46ca5d2231cde8d4cf5d0fa98702e04a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/74/9f4f780c6a14fd95c08754e24fa48594b1aa50": "5f432614cf86fa66f0bf67e356df70bc",
".git/objects/75/a787409c9cbcbe450e38da7499999c16cfd072": "48315447442c2e8317804341caaa9e8b",
".git/objects/79/a88e8156155fa60987330eb01c57534f8acb40": "cd973e057738cbc5cc0f160690f51ff9",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/8a/5479b56f020119155dc37c94ab19a235f9b9ab": "a2faf24db91ae7716e716aa8f25d07c3",
".git/objects/91/0ba9958ca2d96653f1f796ca8ad145165e17b1": "ffa647a9c046490c0ea395f256b6203d",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/dfe1e1f4b17575ef7ad9b61f34a0e825ed0bce": "78e09b6059e16a221658d9ea90060ac6",
".git/objects/9f/3af6f90f2438dda0f715a155150ff48c22469a": "682c16f34305ae3c8206a25e6baa31dd",
".git/objects/a5/738bb521e35d0e33cd97889a2ac6c24387015f": "8a5494cab06d8058b94afdd68e4f41a2",
".git/objects/ad/60cadd5e4f3643d507d8691da1493b9167e103": "b42bf28b8bb5b4e810a945d8c489039c",
".git/objects/b2/3d6a50a9cdf6fda845fe72ba6b0ba17c93367c": "800081f9101c5da1f03f208d4c40a257",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/3c9363606029eb2e3df1a9ee906e0ab31b55f0": "53f6c44da62c3651662dc20b63794c5a",
".git/objects/c2/ee03ce11565628f5ba695b9049c6e1ee30b941": "856063df35c2d2e4f4ae44dd2436ecb3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/ada41797c01d74d90845fb51454950c07028e5": "ec30b7f116ec111e5cb2afe8fca783bb",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d2/6e88b546f138a687c69948e6c3a94444597792": "cc08719a152342d624d043b03a977051",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/473e48f7693067e0fa55f8a804d6efba2a7016": "8b871c852b2430fda01ac2a81cb92a1b",
".git/objects/e0/33b1affc31e42737fc285e0bc0cfba12a5f5d0": "d4e6f7174e728cb378f26bf4b204ef2b",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/b113f1611cac6212da63ec9cb242cb3154251a": "c23d8b7b86e45f82cc1aa41d4aabe7dd",
".git/objects/e7/e5fca5278e7abb76f30d9315ede089be84ee38": "30dbf63d50a1fe7b276aaba2ac70112d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/905e0fb131ce223023c0a6527f1bd37a05c9e9": "a0c1491e6b2bd09a07318d6e65d9608a",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/6f721bb904dbc303c93f26e8d5512f8bcfa8f5": "b0d1f4ae47d102dbf208afe6897de4a0",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/f9b85e922551cfb4ff48496680304f8648fd40": "4955cc2625c8bfdaf7a51608e184ca88",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/01181726e3acb32a7751b7d48ac4bf8cefb71b": "40571b9491a09c42f88640e07ac1e190",
".git/refs/heads/master": "daf6442a8431587c3e50e29752e6c2f1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "daf6442a8431587c3e50e29752e6c2f1",
"assets/AssetManifest.bin": "d5f8313688c8f26e0374883068c17cfb",
"assets/AssetManifest.bin.json": "9367444561bad95432fab5bbf75c21ff",
"assets/AssetManifest.json": "f3976378d16e0c1187a09c88b463e402",
"assets/assets/images/dashboard_bg.png": "fc01369799012c06c07dcc39e84b18dc",
"assets/assets/lang/ar.jpg": "9143f6bb9f70a7082b2d49a2fa2b0339",
"assets/assets/lang/ar.json": "983517769a5860f9747c4c5b63ca5c86",
"assets/assets/lang/en.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/lang/en.json": "19a0cbfa9d03670d483587ff1a8f2e67",
"assets/assets/logo/logo.png": "6d31aa4976e6ee8451229967c3ccb26f",
"assets/FontManifest.json": "cefa876923f9156ee126da37deeb4694",
"assets/fonts/MaterialIcons-Regular.otf": "937599883fe0e8d8ae2cbe24a1998a95",
"assets/NOTICES": "22bc8702ad05f984395d981bfc68a996",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_lucide/lib/fonts/lucide.ttf": "071206beb236cb61e387ab22098eb228",
"assets/packages/timezone/data/latest_all.tzf": "df0e82dd729bbaca78b2aa3fd4efd50d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "6d31aa4976e6ee8451229967c3ccb26f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "ccaa99dc15c61b66273c62933f9cd37a",
"icons/icon-192.png": "0b14e1fe15464e1ce682a524df9fb366",
"icons/icon-512.png": "0b14e1fe15464e1ce682a524df9fb366",
"icons/icon-maskable-192.png": "0b14e1fe15464e1ce682a524df9fb366",
"icons/icon-maskable-512.png": "0b14e1fe15464e1ce682a524df9fb366",
"index.html": "ef58822523b0148652d00a811975acab",
"/": "ef58822523b0148652d00a811975acab",
"main.dart.js": "9a44c578367e666f286b946bff01cbe6",
"manifest.json": "29d7f6f8c64c0f0a076174c9be0981c9",
"vercel.json": "61bd31a2b0ac08f10f13c932b32d6ca1",
"version.json": "a86dd9c1680cc08a9bccd478ee6eefa0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
