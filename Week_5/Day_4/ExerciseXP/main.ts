//Exercise 1 

type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const individual: PersonWithAddress = {
  name: "Alice",
  age: 30,
  street: "123 Main St",
  city: "New York"
};

console.log(individual);

// Exercise 2 

function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else {
    return "This is a string";
  }
}

console.log(describeValue(42));       
console.log(describeValue("Hello"));   

// Exercise 3 

let someValue: any = "This is a string";

let strLength1: number = (<string>someValue).length;

let strLength2: number = (someValue as string).length;

console.log(strLength1); 
console.log(strLength2); 

// Exercise 4 

function getFirstElement(arr: (number | string)[]): string {
  const first = arr[0];
  return first as string;
}

console.log(getFirstElement(["Hello", 42]));
console.log(getFirstElement([100, "World"])); 


// Exercise 5 

function logLength<T extends { length: number }>(input: T): void {
  console.log("Length:", input.length);
}

logLength("Hello");            // Length: 5
logLength([1, 2, 3, 4]);       // Length: 4
// logLength(123);            // ❌ Error: number has no length

// Exercise 6 

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
  if (employee.position === "Manager") {
    return `${employee.name} manages the ${employee.department} department.`;
  } else if (employee.position === "Developer") {
    return `${employee.name} develops software in the ${employee.department} department.`;
  } else {
    return `${employee.name} works in the ${employee.department} as ${employee.position}.`;
  }
}

const dev: Employee = {
  name: "Bob",
  age: 28,
  position: "Developer",
  department: "Engineering"
};

console.log(describeEmployee(dev));

// Exercise 7 

function formatInput<T extends { toString(): string }>(input: T): string {
  const strInput = input.toString() as string;
  return `Formatted: ${strInput}`;
}

console.log(formatInput(123));        // Formatted: 123
console.log(formatInput(true));       // Formatted: true
console.log(formatInput(["a", "b"])); // Formatted: a,b

