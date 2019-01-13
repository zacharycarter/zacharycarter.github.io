document.addEventListener("DOMContentLoaded", ready);

function ready() {
    var mapGeneratorGifElement = document.getElementById('map-generator');

    if (mapGeneratorGifElement !== null) {
        mapGeneratorGifElement.addEventListener('mouseover', function(ev) {
            ev.target.src = 'img/map_generator.gif';
        });
        mapGeneratorGifElement.addEventListener('mouseout', function(ev) {
            ev.target.src = 'img/map_generator.png';
        });
    }

    var fragSpineGifElement = document.getElementById('frag-spine');

    if (fragSpineGifElement !== null) {
        fragSpineGifElement.addEventListener('mouseover', function(ev) {
            ev.target.src = 'img/frag_spine.gif';
        });
        fragSpineGifElement.addEventListener('mouseout', function(ev) {
            ev.target.src = 'img/frag_spine.png';
        });
    }

    var zengineGifElement = document.getElementById('zengine');

    if (zengineGifElement !== null) {
        zengineGifElement.addEventListener('mouseover', function(ev) {
            ev.target.src = 'https://media.giphy.com/media/l1J3tQly5PfRKtMUo/giphy.gif';
        });
        zengineGifElement.addEventListener('mouseout', function(ev) {
            ev.target.src = 'img/zengine.png';
        });
    }
}