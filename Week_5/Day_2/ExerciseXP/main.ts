// Exercise 1
console.log("Hello, World!");

// Exercise 2 

let age: number = 30;
let userName: string = "Alice";

console.log("Name:", userName);
console.log("Age:", age);

// Exercise 3 

let id: string | number;

id = 123; 
console.log("ID as number:", id);

id = "abc123";
console.log("ID as string:", id);

// Exercise 4 

function checkNumber(value: number): string {
  if (value > 0) {
    return "Positive";
  } else if (value < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(10));   // Positive
console.log(checkNumber(-5));   // Negative
console.log(checkNumber(0));    // Zero

// Exercise 5 

function getDetails(name: string, age: number): [string, number, string] {
  const message = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, message];
}

const details = getDetails("Alice", 25);
console.log(details); // ['Alice', 25, 'Hello, Alice! You are 25 years old.']

// Exercise 6 

// Define the Person type
type Person = {
  name: string;
  age: number;
};

// Create the function
function createPerson(name: string, age: number): Person {
  return { name, age };
}

// Test it
const person = createPerson("Bob", 40);
console.log(person); // { name: 'Bob', age: 40 }

// Exercise 7 

const inputElement = document.getElementById("username") as HTMLInputElement;

if (inputElement) {
  inputElement.value = "New Value";
  console.log("Updated input value:", inputElement.value);
}

// Exercise 8 

function getAction(role: string): string {
  switch (role) {
    case "admin":
      return "Manage users and settings";
    case "editor":
      return "Edit content";
    case "viewer":
      return "View content";
    case "guest":
      return "Limited access";
    default:
      return "Invalid role";
  }
}

console.log(getAction("admin"));   // Manage users and settings
console.log(getAction("editor"));  // Edit content
console.log(getAction("viewer"));  // View content
console.log(getAction("guest"));   // Limited access
console.log(getAction("unknown")); // Invalid role

// Exercise 9 

function greet(name: string): string;
function greet(): string;

function greet(name?: string): string {
  return name ? `Hello, ${name}!` : "Hello, stranger!";
}

console.log(greet("Alice")); 
console.log(greet());        
