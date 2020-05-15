let slides = [],
	slidesUrls = [],
	slidesCount = 0,
	currentSlide = 0;

// console.log(d);

function changeVideo() {
	let src = slides[currentSlide].items[0].src;
	addVideo(src);
	if (currentSlide === slidesCount) {
		currentSlide = 0;
	} else {
		++currentSlide;
	}
}

function addVideo(src) {
	let element = document.createElement("video");
	element.id = "video";
	element.width = "1920";
	element.height = "1080";
	element.setAttribute("type", "video/mp4");
	element.setAttribute("autoplay", "");
	element.setAttribute("controls", "");
	element.setAttribute("playsinline", "");
	element.setAttribute("preload", "");
	element.classList.add("video-content");
	element.muted = true;
	let elementSource = document.createElement("source");
	elementSource.src = src;
	element.append(elementSource);
	document.getElementById("video-wrap").innerHTML = "";
	document.getElementById("video-wrap").append(element);
}

function addEndEvent() {
	let element = document.querySelector(".video-content");
	element.addEventListener("ended", function () {
		changeVideo();
	});
}

fetch("https://dsapi.testqmeter.net/v1/display/samsam")
	.then((response) => response.json())
	.then((response) => {
		slides = response.playlist.slides;
	})
	.then(() => {
		changeVideo();
		addEndEvent();
	})
	.then(() => {});

function checkDifference() {
	fetch("https://dsapi.testqmeter.net/v1/display/samsam")
		.then((response) => response.json())
		.then((response) => {
			console.log(response.playlist.slides);
		});
	setTimeout(checkDifference, 5000);
}
checkDifference();
