const params = new URLSearchParams(window.location.search);
const id = params.get("song");

const songs = {
    1: {  file: "music/dandelions.mp3" },
    2: {  file: "music/getyou.mp3" },
    3: {  file: "music/lovesongs.mp3" },
    4: {  file: "music/cinnamongirl.mp3" },
    5: {  file: "music/labyrinth.mp3" }
};

const audio = document.getElementById("bgm");
const songName = document.getElementById("songName");

if (songs[id]) {
    songName.textContent = songs[id].name;
    audio.src = songs[id].file;
    audio.volume = 0.05;
    audio.loop = true;
    audio.play().catch(() => {
        document.body.addEventListener('click', () => audio.play(), { once: true });
    });
} else {
    songName.textContent = "Song not found";
}

function createLayerStar(layer) {
    const star = document.createElement('div');
    star.classList.add('star', layer);
        star.style.left = Math.random() * window.innerWidth + 'px';
        const startAbove = - (Math.random() * (window.innerHeight * 0.25) + 20);
        star.style.top = startAbove + 'px';
    const drift = Math.floor((Math.random() * 240) - 120); 
    star.style.setProperty('--drift', drift + 'px');
    let fall = 2 + Math.random() * 2; 
    if (layer === 'front') fall = 1 + Math.random() * 1.6;
    if (layer === 'mid') fall = 1.6 + Math.random() * 1.8;
    if (layer === 'back') fall = 2.4 + Math.random() * 2.2;

    const twinkleDur = (0.8 + Math.random() * 1.4).toFixed(2);
    const twinkleDelay = (Math.random() * 1.6).toFixed(2);

    star.style.setProperty('--fall-duration', fall + 's');
    star.style.setProperty('--twinkle-duration', twinkleDur + 's');
    star.style.setProperty('--twinkle-delay', twinkleDelay + 's');

    document.getElementById('shooting-stars').appendChild(star);
    const removeAfter = Math.round((fall * 1000) * 0.75 + 300); 
    setTimeout(() => star.remove(), removeAfter);
}

setInterval(() => createLayerStar('back'), 1100);
setInterval(() => createLayerStar('mid'), 700);
setInterval(() => createLayerStar('front'), 420);

// Reveal hidden paragraph with small pop animation
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('revealBtn');
  const hidden = document.querySelector('.content-text3');
  if (!btn || !hidden) return;
  hidden.classList.remove('show');
  btn.addEventListener('click', () => {
    const isShown = hidden.classList.toggle('show');
    btn.setAttribute('aria-expanded', isShown);
    if (isShown) {
      // scroll the revealed text into view slightly
      setTimeout(() => hidden.scrollIntoView({ behavior: 'smooth', block: 'center' }), 120);
    }
  });
});
