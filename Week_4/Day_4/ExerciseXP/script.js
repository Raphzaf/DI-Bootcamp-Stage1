// Exercise 1
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

compareToTen(15)
  .then(result => console.log("Resolved:", result))
  .catch(error => console.log("Rejected:", error));

compareToTen(8)
  .then(result => console.log("Resolved:", result))
  .catch(error => console.log("Rejected:", error));

// Exercise 2 

const delayedSuccess = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

delayedSuccess.then(message => console.log(message));

// Exercise 3 

const pResolved = Promise.resolve(3);
pResolved.then(value => console.log("Resolved with:", value));

const pRejected = Promise.reject("Boo!");
pRejected.catch(error => console.log("Rejected with:", error));
