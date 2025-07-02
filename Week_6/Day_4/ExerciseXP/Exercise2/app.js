import { persons } from './data.js';

function calculateAverageAge(people) {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return (totalAge / people.length).toFixed(2);
}

const averageAge = calculateAverageAge(persons);
console.log(`The average age is: ${averageAge}`);
