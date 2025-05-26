// Exercise 1 

let people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people[people.indexOf("James")] = "Jason";
people.push("Javascript");

console.log(people.indexOf("Mary"));

let peopleCopy = people.slice(1, people.length - 1);
console.log(peopleCopy);

console.log(people.indexOf("Foo"));

const last = people[people.length - 1];
console.log(last);

for (let person of people) {
  console.log(person);
}

for (let person of people) {
  console.log(person);
  if (person === "Devon") break;
}

// Exercise 2

const colors = ["blue", "red", "green", "purple", "black"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// Exercise 3 

let number;

do {
  number = prompt("Enter a number (10 or more):");
} while (Number(number) < 10);

// Exercise 4 

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);

const secondTenant = building.nameOfTenants[1];
const rooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(secondTenant, rooms);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);

// Exercise 5 

const family = {
  father: "John",
  mother: "Jane",
  son: "Jake",
  daughter: "Julia"
};

for (let key in family) {
  console.log(key);
}

for (let key in family) {
  console.log(family[key]);
}

// Exercise 6 

const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer"
};

let sentence = "";
for (let key in details) {
  sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim());

// Exercise 7 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const societyName = names
  .map(name => name[0])
  .sort()
  .join("");

console.log(societyName);
