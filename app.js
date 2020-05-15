if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("/sw.js")
		.then((reg) => console.log("service worker registered", reg))
		.catch((err) => console.log("service worker not registered", err));
}

function readableBytes(bytes) {
	var i = Math.floor(Math.log(bytes) / Math.log(1024)),
		sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + " " + sizes[i];
}
if ("storage" in navigator && "estimate" in navigator.storage) {
	navigator.storage
		.estimate()
		.then(({ usage, quota }) => {
			console.log(
				`Using ${readableBytes(usage)} out of ${readableBytes(quota)} bytes.`,
			);
			document.getElementById("from").innerText = readableBytes(quota);
		})
		.catch((error) => {
			console.error("Loading storage estimate failed:");
			console.log(error.stack);
		});
} else {
	console.error("navigator.storage.estimate API unavailable.");
}
