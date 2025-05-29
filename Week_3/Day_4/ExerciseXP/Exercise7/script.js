(function(username) {
  const navbar = document.querySelector('.navbar');
  const userDiv = document.createElement('div');
  userDiv.className = 'user-profile';
  const img = document.createElement('img');
  img.src = 'https://i.pravatar.cc/150?u=' + username; 
  img.alt = username + "'s profile picture";
  const nameSpan = document.createElement('span');
  nameSpan.textContent = username;
  userDiv.appendChild(img);
  userDiv.appendChild(nameSpan);
  navbar.appendChild(userDiv);
})('John');
