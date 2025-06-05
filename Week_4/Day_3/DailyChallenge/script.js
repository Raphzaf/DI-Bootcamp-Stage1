 const form = document.getElementById('userForm');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // prevent form from reloading page

      const name = document.getElementById('name').value.trim();
      const lastname = document.getElementById('lastname').value.trim();

      const json = {
        name: name,
        lastname: lastname
      };

      output.textContent = JSON.stringify(json);
    });