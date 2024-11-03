document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyToClipboard);

// Array of funny words, each less than 7 letters
const funnyWords = [
    "skibidi", "0000", "1234", "4321", "goofy", "meow", "goof"
];

// Reference to the audio element
const spinSound = document.getElementById("spinSound");

function generatePassword() {
    // Start the spinning sound
    spinSound.play();

    // Select the reel
    const reel1 = document.getElementById("reel1");

    // Create a spin effect
    spinReel(reel1);

    // After spinning, set random words and stop the sound after 3 seconds
    setTimeout(() => {
        reel1.textContent = funnyWords[Math.floor(Math.random() * funnyWords.length)];
        
        // Stop the spinning sound
        spinSound.pause();
        spinSound.currentTime = 0; // Reset to the beginning of the sound
    }, 3000); // Spin time adjusted to 3000 ms
}

function spinReel(reel) {
    let spinCount = 0;
    const interval = setInterval(() => {
        reel.textContent = funnyWords[Math.floor(Math.random() * funnyWords.length)];
        spinCount++;
        if (spinCount >= 30) clearInterval(interval); // Spin 30 times before stopping
    }, 100);
}

function copyToClipboard() {
    const reel1 = document.getElementById("reel1").textContent;
    navigator.clipboard.writeText(reel1).then(() => {
        alert("Your Useless password has been copied to clipboard!!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
