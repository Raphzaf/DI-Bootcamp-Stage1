function kgToGrams1(kg) {
    return kg * 1000;
}
console.log(kgToGrams1(2));
const kgToGrams2 = function(kg) {
    return kg * 1000;
};
console.log(kgToGrams2(3)); 
const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(4)); 