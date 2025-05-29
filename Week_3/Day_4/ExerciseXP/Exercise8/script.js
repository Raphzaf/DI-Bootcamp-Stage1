function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const p = document.createElement("p");
        p.textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        document.body.appendChild(p);
    }

    addIngredients("apple", "banana", "lemon");
    addIngredients("mango", "kiwi", "grape");
    displayJuice();
}

makeJuice("large");
