const gif = document.getElementById('gif');
const question = document.getElementById('question');
const btnContainer = document.getElementById('btnContainer');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesSize = 18;
let noTimes = 0;

const gifs = [
  "https://media.tenor.com/76BaX0eo304AAAAj/kitty-kitty-heart.gif",
  "https://media1.tenor.com/m/wVAjxnPa81IAAAAd/cat-cat-gif.gif",
  "https://media1.tenor.com/m/f6ts3WWJa-8AAAAC/funny-cats-funny.gif",
  "https://media1.tenor.com/m/kEZzd8WrRpAAAAAC/peach-peach-and-goma.gif",
  "https://media.tenor.com/C35t4Pf5GlgAAAAi/peach-and-goma-cute.gif",
  "https://media1.tenor.com/m/troWhJKIjZsAAAAC/hey-cat.gif",
  "https://media.tenor.com/mfmIXiRnJOkAAAAj/peach-and-goma-peach-goma.gif"
];

yesBtn.onclick = () => {
  gif.src = "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif";
  question.textContent = "เย่ เค้าก็รักเธอเหมือนกัน 💗";

  btnContainer.innerHTML = `
    <button class="btn yes" id="next">Continue ➡️</button>
  `;

  document.getElementById("next").onclick = () => {
    window.location.href = "page2.html"
  };
};

noBtn.onmouseover = () => {
  // ปุ่ม No เด้งหนี
  noBtn.style.position = "relative";
  noBtn.style.left = (Math.random() * 200 - 100) + "px";
  noBtn.style.top = (Math.random() * 100 - 50) + "px";
};

noBtn.onclick = () => {
  noTimes++;
  yesSize += 10;

  yesBtn.style.fontSize = yesSize + "px";
  gif.src = gifs[Math.min(noTimes, gifs.length - 1)];

  if (noTimes >= 6) {
    noBtn.remove();
    yesBtn.textContent = "Love ❤️";

    yesBtn.onclick = () => {
      gif.src = "https://media1.tenor.com/m/qR1sGRNmfqsAAAAC/besito-catlove.gif";
      question.textContent = "รักเหมือนกันคั้บบจุ้บ muah!! 💞";

      btnContainer.innerHTML = `
    <button class="btn yes" id="next">Continue ➡️</button>
      `;
      document.getElementById("next").onclick = () => {
    window.location.href = "page2.html"
      };
    };
  }
};
