let slides = [];
slidesUrls = [];

// console.log(d);
fetch("https://dsapi.testqmeter.net/v1/display/samsam")
	.then((reponse) => reponse.json())
	.then((reponse) => {
		slides = reponse.playlist.slides;
		console.log("slides", slides[0]);

		slidesUrls = slides[0].items.map((item) => item.src);
	})
	.then(() => {
		console.log("slides", slides);

		slidesUrls.forEach((elementItem, index) => {
			if (index > 0) return;
			console.log("element", elementItem);
			let element = document.createElement("video");
			element.id = "video";
			element.width = "1920";
			element.height = "1080";
			element.setAttribute("autoplay", true);
			element.setAttribute("controls", true);
			element.setAttribute("loop", true);
			element.muted = true;
			let elementSource = document.createElement("source");
			elementSource.src = elementItem;
			element.append(elementSource);
			console.log("element", element);
			document.getElementById("video-wrap").append(element);
		});
	})
	.then(() => {});

function checkDifference() {
	fetch("https://dsapi.testqmeter.net/v1/display/samsam")
		.then((reponse) => reponse.json())
		.then((reponse) => {
			console.log(reponse.playlist.slides);
		});
	setTimeout(checkDifference, 5000);
}
checkDifference();
