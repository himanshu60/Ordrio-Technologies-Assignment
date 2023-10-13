// Get references to HTML elements
const textInput = document.getElementById('text-input');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');

// Create a function to initialize the SpeechSynthesisUtterance object
function initializeSpeech() {
    speech.text = textInput.value;
    speechSynthesis.speak(speech);
    playButton.disabled = true;
    pauseButton.disabled = false;
}

// Create an instance of the SpeechSynthesisUtterance
const speech = new SpeechSynthesisUtterance();

// Event listener for the Play button
playButton.addEventListener('click', () => {
    if (textInput.value.trim() === '') {
        alert('Please enter text to be synthesized.');
        return;
    }

    // Stop any ongoing speech
    speechSynthesis.cancel();

    initializeSpeech();
});

// Event listener for the Pause button
pauseButton.addEventListener('click', () => {
    speechSynthesis.pause();
    playButton.disabled = false;
    pauseButton.disabled = true;
});
