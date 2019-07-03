self.addEventListener("install", function (event) {
	console.log("[Serviceworker is installing]", event);
});

self.addEventListener("activate", function (event) {
	console.log("[Serviceworker is activating]", event);
	return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
	console.log("[Service worker]", event);
	event.respondWith(fetch(event.request));
});

