const playButton = document.getElementById('play-button');
playButton.addEventListener('click', changeImage);

function changeImage() {
    const sourceImage = playButton.src;
    console.log(sourceImage);
    if(sourceImage === 'http://127.0.0.1:5500/images/assets_play.svg') {
        playButton.src = './images/assets_stop-2.svg';
    } else if(sourceImage === 'http://127.0.0.1:5500/images/assets_stop-2.svg') {
        playButton.src = './images/assets_play.svg';
    }
}