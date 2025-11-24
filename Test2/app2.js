
const songs = {
    btn1: "dandelions.mp3", // Dandelions - Ruth B.
    btn2: "getyou.mp3", // Get You - Daniel Caesar ft. Kali Uchis
    btn3: "lovesongs.mp3", // Love Songs - Kaash Paige
    btn4: "cinnamongirl.mp3", // Cinnamon Girl - Lana Del Rey
    btn5: "labyrinth.mp3"  // Labyrinth - Taylor Swift
};


document.getElementById("btn1").onclick = () => {
    window.location.href = "page3.html?song=1";
};
document.getElementById("btn2").onclick = () => {
    window.location.href = "page3.html?song=2";
};
document.getElementById("btn3").onclick = () => {
    window.location.href = "page3.html?song=3";
};
document.getElementById("btn4").onclick = () => {
    window.location.href = "page3.html?song=4";
};
document.getElementById("btn5").onclick = () => {
    window.location.href = "page3.html?song=5";
};
