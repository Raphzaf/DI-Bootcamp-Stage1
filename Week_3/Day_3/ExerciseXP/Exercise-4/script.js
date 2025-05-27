document.getElementById("MyForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const radiusInput = document.getElementById("radius");
  const volumeInput = document.getElementById("volume");

  const radius = parseFloat(radiusInput.value);

  if (isNaN(radius) || radius < 0) {
    alert("Please enter a valid, non-negative number for the radius.");
    volumeInput.value = "";
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  volumeInput.value = volume.toFixed(2); 
});
