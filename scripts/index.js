const dom = {
    playAudioButton: document.getElementById('playAudio'),
    audioElement: document.getElementById('myAudio')
};

function playAudio() {
    dom.audioElement.play();
}

dom.playAudioButton.addEventListener('click', playAudio);