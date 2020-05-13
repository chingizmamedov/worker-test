let slides = [];
slidesUrls = [];

// console.log(d);
fetch("http://dsapi.testqmeter.net/v1/display/samsam")
	.then((reponse) => reponse.json())
	.then((reponse) => {
		console.log(reponse);
		slides = reponse.playlist.slides;

		slidesUrls = slides[1].items.map((item) => item.src);
	})
	.then(() => {
		console.log("slides", slides);

		// slidesUrls.forEach((elementItem) => {
		// 	console.log("element", elementItem);
		// 	let element = document.createElement("video");
		// 	element.id = "video";
		// 	element.width = "400";
		// 	element.height = "300";
		// 	element.setAttribute("autoplay", true);
		// 	element.setAttribute("controls", true);
		// 	element.setAttribute("loop", true);
		// 	let elementSource = document.createElement("source");
		// 	elementSource.src = elementItem;
		// 	element.append(elementSource);
		// 	console.log("element", element);
		// 	document.getElementById("video-wrap").append(element);
		// });
	});

function checkDifference() {
	fetch("http://dsapi.testqmeter.net/v1/display/samsam")
		.then((reponse) => reponse.json())
		.then((reponse) => {
			console.log(reponse.playlist.slides);
		});
	setTimeout(checkDifference, 5000);
}
checkDifference();
