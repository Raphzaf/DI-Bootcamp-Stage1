const button = document.querySelector('button');
const displayBox = document.querySelector('.display');

button.addEventListener('click', async () => {
  displayBox.innerHTML = '<div class="loader"></div><p>Loading...</p>';
  const id = Math.floor(Math.random() * 83) + 1; // SWAPI has 83 characters

  try {
    const res = await fetch(`https://swapi.dev/api/people/${id}/`);
    if (!res.ok) throw new Error("Fetch error");
    const data = await res.json();

    const homeRes = await fetch(data.homeworld);
    const homeData = await homeRes.json();

    displayBox.innerHTML = `
      <h2>${data.name}</h2>
      <p><strong>Height:</strong> ${data.height}</p>
      <p><strong>Gender:</strong> ${data.gender}</p>
      <p><strong>Birth Year:</strong> ${data.birth_year}</p>
      <p><strong>Home World:</strong> ${homeData.name}</p>
    `;
  } catch {
    displayBox.innerHTML = `<h2>Oh No! That person isn't available.</h2>`;
  }
});
