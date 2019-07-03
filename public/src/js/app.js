if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(function() {
        console.log("Serviceworker is registered");
    });
}
let deferred;
window.addEventListener("beforeinstallprompt", function (event) {
	console.log("App install banner deferred");
	event.preventDefault();
	deferred = event;
	return false;
});