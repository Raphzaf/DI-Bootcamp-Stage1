const products = require('./products');

function findProductByName(productName) {
  return products.find(product => product.name.toLowerCase() === productName.toLowerCase());
}

const itemsToSearch = ["Laptop", "Book", "Shirt"];

itemsToSearch.forEach(item => {
  const result = findProductByName(item);
  if (result) {
    console.log(`Found: ${result.name} - $${result.price} - Category: ${result.category}`);
  } else {
    console.log(`Product ${item} not found.`);
  }
});
