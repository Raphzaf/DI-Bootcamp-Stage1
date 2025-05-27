const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle-btn");

let userInputs = {};
let storyTemplates = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields!");
    return;
  }

  userInputs = { noun, adjective, person, verb, place };

  storyTemplates = [
    `${person} went to ${place} with a ${adjective} ${noun} and decided to ${verb} all day.`,
    `Once upon a time, ${person} found a ${adjective} ${noun} in ${place} and started to ${verb}.`,
    `At ${place}, ${person} couldn't resist the urge to ${verb} while holding a ${adjective} ${noun}.`,
    `Everyone was shocked when ${person} ${verb}ed through ${place} on top of a ${adjective} ${noun}.`,
    `${person} brought their ${adjective} ${noun} to ${place} to try and learn how to ${verb}.`
  ];

  displayRandomStory();

  shuffleBtn.style.display = "inline-block";
});

shuffleBtn.addEventListener("click", () => {
  if (storyTemplates.length > 1) {
    displayRandomStory();
  }
});

function displayRandomStory() {
  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  const randomStory = storyTemplates[randomIndex];

  storySpan.textContent = randomStory;
}
