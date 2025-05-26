// Exercise 1 

function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum :", sum);
}

displayNumbersDivisible();

// Exercise 2 

const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--;
    }
  }
  return total;
}

console.log(myBill());

// Exercise 3

function changeEnough(itemPrice, amountOfChange) {
  const total = 
    amountOfChange[0] * 0.25 +
    amountOfChange[1] * 0.10 +
    amountOfChange[2] * 0.05 +
    amountOfChange[3] * 0.01;
  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));

// Exercise 4 

function hotelCost(nights) {
  while (isNaN(nights) || nights === "" || nights === null) {
    nights = prompt("Enter number of nights:");
  }
  return nights * 140;
}

function planeRideCost(destination) {
  while (typeof destination !== "string" || destination.trim() === "") {
    destination = prompt("Enter destination:");
  }
  destination = destination.toLowerCase();
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  while (isNaN(days) || days === "" || days === null) {
    days = prompt("Enter number of rental days:");
  }
  let cost = days * 40;
  if (days > 10) cost *= 0.95;
  return cost;
}

function totalVacationCost() {
  let nights = prompt("How many nights in the hotel?");
  let destination = prompt("Where are you flying?");
  let days = prompt("How many days will you rent a car?");
  const hotel = hotelCost(Number(nights));
  const plane = planeRideCost(destination);
  const car = rentalCarCost(Number(days));
  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
}

totalVacationCost();

// Exercise 5 

const div = document.getElementById("container");
console.log(div);

const lists = document.querySelectorAll("ul");
lists[0].children[1].textContent = "Richard";
lists[1].removeChild(lists[1].children[1]);

for (let ul of lists) {
  ul.children[0].textContent = "YourName";
}

for (let ul of lists) {
  ul.classList.add("student_list");
}
lists[0].classList.add("university", "attendance");

div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

for (let li of lists[1].children) {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
}

for (let li of lists[0].children) {
  if (li.textContent === "Richard") {
    li.style.border = "1px solid black";
  }
}

document.body.style.fontSize = "18px";

if (div.style.backgroundColor === "lightblue") {
  const names = Array.from(lists[0].children).map(li => li.textContent);
  alert(`Hello ${names.join(" and ")}`);
}

// Exercise 6 

const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const text = document.createTextNode("Logout");
newLi.appendChild(text);

const ul = document.querySelector("#socialNetworkNavigation ul");
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);

// Exercise 7 

const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg",
    alreadyRead: true
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

for (let book of allBooks) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = `${book.title} written by ${book.author}`;
  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";
  if (book.alreadyRead) p.style.color = "red";
  div.appendChild(p);
  div.appendChild(img);
  section.appendChild(div);
}
