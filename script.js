const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
yesBtn.addEventListener("click", () => {
question.innerHTML = "If No, Don't Worry Positive Potato Is Here😊";
gif.src ="<iframe src="<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/12fWcohsEln5V6" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/manga-kimi-ni-todoke-12fWcohsEln5V6">via GIPHY</a></p>";
});
noBtn.addEventListener("mouseover", () => {
const noBtnRect = noBtn.getBoundingClientRect();
const maxX = window.innerWidth - noBtnRect.width;
const maxy = window.innerHeight - noBtnRect.height;
const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);
noBtn.style.left = randomX + "px";
noBtn.style.top = randomy + "px";
});
