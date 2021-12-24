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
