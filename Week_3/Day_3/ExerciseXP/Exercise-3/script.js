let allBoldItems;

function getBoldItems() {
  const paragraph = document.getElementById("my-paragraph");
  allBoldItems = paragraph.querySelectorAll("strong");
}

function highlight() {
  allBoldItems.forEach(item => {
    item.style.color = "blue";
  });
}

function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = "black";
  });
}

getBoldItems();

const paragraph = document.getElementById("my-paragraph");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);
