const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
yesBtn.addEventListener("click", () => {
question.innerHTML = "If No, Don't Worry Positive Potato Is Here😊";
gif.src =
"https://private-user-images.githubusercontent.com/149063902/330012499-a029e56f-1962-4602-b445-941c88c3c9e7.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU1OTUxMDksIm5iZiI6MTcxNTU5NDgwOSwicGF0aCI6Ii8xNDkwNjM5MDIvMzMwMDEyNDk5LWEwMjllNTZmLTE5NjItNDYwMi1iNDQ1LTk0MWM4OGMzYzllNy5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDUxM1QxMDA2NDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kM2Q3M2M3NDI0NzNlM2IzM2Y1NGU3ZjkzMjQzZTU1NTdkNGY2Y2JiZDRiOTgyZGViZmM5NmUyNGE5OTA4MjE4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.DT41yYzuWV17jtWnB7Mqo8ZBFE_Eg-tm6X00X_X5yEY";
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
