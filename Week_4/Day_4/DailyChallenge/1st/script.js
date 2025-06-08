function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      return reject("Input is not an array");
    }
    const allStrings = words.every(w => typeof w === "string");
    if (allStrings) {
      const uppercased = words.map(w => w.toUpperCase());
      resolve(uppercased);
    } else {
      reject("All items in the array must be strings");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      return reject("Input is not an array");
    }
    if (words.length > 4) {
      const sorted = [...words].sort();
      resolve(sorted);
    } else {
      reject("Array length must be greater than 4");
    }
  });
}

makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log("OK:", result))
  .catch(err  => console.log("Error:", err));

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log("OK:", result))
  .catch(err  => console.log("Error:", err));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log("OK:", result))
  .catch(err  => console.log("Error:", err));
