const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const card = document.querySelector(".card");
const proposal = document.querySelector(".proposal");
const backBtn = document.querySelector(".back");
const heartsContainer = document.querySelector(".hearts");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const modeToggle = document.getElementById("modeToggle");

// YES CLICK
yesBtn.addEventListener("click", () => {
    card.classList.add("hidden");
    proposal.classList.remove("hidden");
});

// BACK
backBtn.addEventListener("click", () => {
    proposal.classList.add("hidden");
    card.classList.remove("hidden");
});

// NO RUN AWAY
noBtn.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// FLOATING HEARTS
function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 500);

// MUSIC TOGGLE
musicToggle.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicToggle.innerHTML = "🔊";
    } else {
        music.pause();
        musicToggle.innerHTML = "🎵";
    }
});

// DARK/LIGHT MODE
modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
});