let slides = []
slidesUrls = [];

fetch("http://dsapi.testqmeter.net/v1/display/samsam")
    .then(reponse => reponse.json())
    .then(reponse => {
        console.log(reponse)
        slides = reponse.playlist.slides;
        slidesUrls = slides[0].items.map(item => item.src)
        console.log("slidesUrls", slidesUrls)
        console.log("slides", slides)
    })
    .then(() => {

        slidesUrls.forEach(elementItem => {
            console.log("element", elementItem)
            let element = document.createElement("video")
            element.id = "video"
            element.width = "400"
            element.height = "300"
            element.setAttribute("autoplay", true)
            element.setAttribute("controls", true)
            let elementSource = document.createElement("source")
            elementSource.src = elementItem;
            element.append(elementSource);
            console.log("element", element);
            document.getElementById("video-wrap").append(element);
        });
    })