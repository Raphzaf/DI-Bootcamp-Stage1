// Exercise 1 

const giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

fetch(giphyUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data);

    console.log("GIF Array:", data.data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// Exercise 2 

const giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

fetch(giphyUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data);
    console.log("GIFs about 'sun':", data.data);
  })
  .catch(error => {
    console.error('Error fetching GIFs:', error);
  });

// Exercise 3 
async function getStarshipData() {
  const url = "https://www.swapi.tech/api/starships/9/";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data.result);
  } catch (error) {
    console.error('Error fetching starship data:', error);
  }
}

getStarshipData();

// Exercise 4 

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
