// parallax animation
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: '0',
    orientation: 'down',
    scale: '1.3'
});

// modal
const modal = document.getElementById("modal")
function openModal () {
    modal.classList.add("d-block")
}
function closeModal () {
    modal.classList.remove("d-block")
}

// gallery 
let pictures = new Array
const requestURL = 'http://127.0.0.1:5500/images.json'
const request = new XMLHttpRequest();
request.open('GET', requestURL)
request.responseType = 'json'
request.send()
request.onload = function () {
    pictures = request.response
    createGallery()
}
function createGallery () {
    const picturesLenght = pictures.length
    for (let i = 0; i < picturesLenght; i++) {
        placeImages(pictures[i])
    }
}
function placeImages (image) {
    let thisLi = document.createElement(`li`)
    thisLi.innerHTML = `<img src=${image.img} />`
    const placeThisImage = document.getElementById('gallery')
    placeThisImage.appendChild(thisLi)
}