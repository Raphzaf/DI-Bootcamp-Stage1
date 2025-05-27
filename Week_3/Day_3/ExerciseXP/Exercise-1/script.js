const h1 = document.querySelector("h1");
console.log(h1);

const article = document.querySelector("article");
const lastParagraph = article.querySelectorAll("p")[article.querySelectorAll("p").length - 1];
lastParagraph.remove();

const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

const boldBtn = document.getElementById("bold-btn");
boldBtn.addEventListener("click", () => {
  const paragraphs = document.querySelectorAll("article p");
  paragraphs.forEach(p => {
    p.style.fontWeight = "bold";
  });
});

h1.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 101); 
  h1.style.fontSize = `${randomSize}px`;
});

const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.addEventListener("mouseover", () => {
  secondParagraph.classList.add("fade-out");
});
