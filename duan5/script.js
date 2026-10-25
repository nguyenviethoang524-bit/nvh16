function upDate(previewPic) {
    console.log("Mouse over image");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    const imageDiv = document.getElementById("image");

    imageDiv.textContent = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Mouse out of image");

    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.textContent =
        "Hover over an image below to display here.";
}