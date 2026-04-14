const dom = {
    playAudioButton: document.getElementById('playAudio'),
    audioElement: document.getElementById('myAudio')
};

function playAudio() {
    dom.audioElement.play();
}

dom.playAudioButton.addEventListener('click', playAudio);

// Esempi base https://github.com/Samuel88/functional-programming/tree/main/js/base