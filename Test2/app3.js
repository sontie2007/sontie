// ดึงตัวเลขเพลงจาก URL เช่น page3.html?song=3
const params = new URLSearchParams(window.location.search);
const id = params.get("song");

// รายชื่อเพลงตามลำดับที่ผู้ใช้ระบุ (ดึงจากโฟลเดอร์ music)
const songs = {
    1: {  file: "dandelions.mp3" },
    2: {  file: "getyou.mp3" },
    3: {  file: "lovesongs.mp3" },
    4: {  file: "cinnamongirl.mp3" },
    5: {  file: "labyrinth.mp3" }
};

const audio = document.getElementById("bgm");
const songName = document.getElementById("songName");

// ตั้งเพลง + ชื่อเพลง + เล่นอัตโนมัติ
if (songs[id]) {
    songName.textContent = songs[id].name;
    audio.src = songs[id].file;
    audio.volume = 0.05;
    audio.loop = true;
    // พยายามเล่นอัตโนมัติ ถ้า browser block ให้ user แตะหน้าจอ
    audio.play().catch(() => {
        document.body.addEventListener('click', () => audio.play(), { once: true });
    });
} else {
    songName.textContent = "Song not found";
}

// ⭐ ดาวตก (ซ้อนเป็นชั้น back / mid / front) พร้อม twinkle
function createLayerStar(layer) {
    const star = document.createElement('div');
    star.classList.add('star', layer);
        // ตำแหน่งเริ่มต้น: ให้เริ่มเหนือหน้าจอเล็กน้อย เพื่อให้ดาวตกผ่านทั้งหน้าจอก่อนหาย
        star.style.left = Math.random() * window.innerWidth + 'px';
        const startAbove = - (Math.random() * (window.innerHeight * 0.25) + 20); // -20px .. -25% height
        star.style.top = startAbove + 'px';
    // กำหนดการไหลด้านข้างแบบสุ่ม (drift) เพื่อให้แต่ละดาวมีทิศทางเล็กน้อย
    const drift = Math.floor((Math.random() * 240) - 120); // -120 .. +120 px
    star.style.setProperty('--drift', drift + 'px');
    // fall duration: front = faster, back = slower
    let fall = 2 + Math.random() * 2; // default
    if (layer === 'front') fall = 1 + Math.random() * 1.6;
    if (layer === 'mid') fall = 1.6 + Math.random() * 1.8;
    if (layer === 'back') fall = 2.4 + Math.random() * 2.2;
    // twinkle timing
    const twinkleDur = (0.8 + Math.random() * 1.4).toFixed(2);
    const twinkleDelay = (Math.random() * 1.6).toFixed(2);

    star.style.setProperty('--fall-duration', fall + 's');
    star.style.setProperty('--twinkle-duration', twinkleDur + 's');
    star.style.setProperty('--twinkle-delay', twinkleDelay + 's');

    document.getElementById('shooting-stars').appendChild(star);
    // remove shortly after the star fades (fade occurs around ~60% of fall duration)
    const removeAfter = Math.round((fall * 1000) * 0.75 + 300); // safety buffer
    setTimeout(() => star.remove(), removeAfter);
}

// สร้าง interval สำหรับแต่ละชั้น
setInterval(() => createLayerStar('back'), 1100);
setInterval(() => createLayerStar('mid'), 700);
setInterval(() => createLayerStar('front'), 420);