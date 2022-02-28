const playButton = document.getElementById('play-button');
playButton.addEventListener('click', changeImage);

function changeImage() {
    const sourceImage = playButton.src;
    console.log(sourceImage);
    // https://matteor1994.github.io/copyJazzFMRomania/images/assets_play.svg
    // https://matteor1994.github.io/copyJazzFMRomania/images/assets_stop-2.svg
    if(sourceImage === 'https://matteor1994.github.io/copyJazzFMRomania/images/assets_play.svg') {
        playButton.src = 'https://matteor1994.github.io/copyJazzFMRomania/images/assets_stop-2.svg';
    } else if(sourceImage === 'https://matteor1994.github.io/copyJazzFMRomania/images/assets_stop-2.svg') {
        playButton.src = 'https://matteor1994.github.io/copyJazzFMRomania/images/assets_play.svg';
    }
}