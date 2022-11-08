$(document).ready(() => {
    const bruhtton = document.querySelectorAll('button');
    const bruhdio = document.createElement('audio');
    bruhdio.src = 'Bruh-sound-effect.mp3';
    bruhdio.autoPlay = false;
    bruhdio.preLoad = true;

    
    $('button').click(() => {
        bruhdio.play();
    });
});
