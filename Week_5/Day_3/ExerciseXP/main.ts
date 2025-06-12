// Exercise 1 

class Employee {
  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }

  protected getSalary(): number {
    return this.salary;
  }
}

const emp = new Employee('Alice Johnson', 75000, 'Developer', 'Engineering');
console.log(emp.getEmployeeInfo());

// Exercise 2

class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getProductInfo(): string {
    return `Product: ${this.name}, Price: $${this.price}`;
  }
}

const product = new Product(101, 'Wireless Mouse', 25.99);
console.log(product.getProductInfo());

// Exercise 3

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): string {
    return "Some generic animal sound";
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  public override makeSound(): string {
    return "Bark!";
  }
}

const myDog = new Dog('Rex');
console.log(`${myDog.name} says: ${myDog.makeSound()}`);

// Exercise 4 

class Calculator {
  public static add(a: number, b: number): number {
    return a + b;
  }

  public static subtract(a: number, b: number): number {
    return a - b;
  }
}

console.log(Calculator.add(5, 3));      
console.log(Calculator.subtract(10, 4)); 

// Exercise 5 

interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string; 

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  if (user.membershipLevel) {
    console.log(`Membership: ${user.membershipLevel}`);
  } else {
    console.log(`Membership: None`);
  }
}

const premium: PremiumUser = {
  id: 1,
  name: 'Jasmine Carter',
  email: 'jasmine@example.com',
  membershipLevel: 'Gold',
};

printUserDetails(premium);
