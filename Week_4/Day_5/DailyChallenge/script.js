const form = document.getElementById('gif-form');
const input = document.getElementById('gif-input');
const container = document.getElementById('gif-container');
const deleteAllBtn = document.getElementById('delete-all');

const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

form.addEventListener('submit', async (event) => {
  event.preventDefault(); 
  const searchTerm = input.value.trim();

  if (!searchTerm) return;

  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}&rating=g`);
    
    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const data = await res.json();
    const imgUrl = data.data.images.original.url;

    const gifWrapper = document.createElement('div');
    gifWrapper.classList.add('gif-wrapper');

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = searchTerm;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'DELETE';
    delBtn.addEventListener('click', () => gifWrapper.remove());

    gifWrapper.appendChild(img);
    gifWrapper.appendChild(delBtn);
    container.appendChild(gifWrapper);
  } catch (err) {
    console.error('Fetch error:', err);
  }

  input.value = '';
});

deleteAllBtn.addEventListener('click', () => {
  container.innerHTML = '';
});
