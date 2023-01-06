const audio1 = new Audio("https://www.fesliyanstudios.com/play-mp3/5451");
const audio2 = new Audio("https://www.fesliyanstudios.com/play-mp3/5247");
const audio3 = new Audio("https://www.fesliyanstudios.com/play-mp3/5745");
const audio4 = new Audio("https://www.fesliyanstudios.com/play-mp3/21");
const audio5 = new Audio("https://www.fesliyanstudios.com/play-mp3/341");
const audio6 = new Audio("https://www.fesliyanstudios.com/play-mp3/244");
const audio7 = new Audio("https://www.fesliyanstudios.com/play-mp3/5272");
const audio8 = new Audio("https://www.fesliyanstudios.com/play-mp3/1131");
const audio9 = new Audio("https://www.fesliyanstudios.com/play-mp3/1644");
const sounds = [, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9];
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        sounds.forEach(sound => {
            sound.pause();
            sound.currentTime = 0;
        });
        const sound = sounds[button.id];
        sound.play();
    });
});