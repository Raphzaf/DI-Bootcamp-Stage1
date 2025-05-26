const planets = [
  { name: "Mercury", color: "#a9a9a9", moons: 0 },
  { name: "Venus", color: "#e5c07b", moons: 0 },
  { name: "Earth", color: "#3cb371", moons: 1 },
  { name: "Mars", color: "#d35400", moons: 2 },
  { name: "Jupiter", color: "#f5c542", moons: 79 },
  { name: "Saturn", color: "#f7e57e", moons: 83 },
  { name: "Uranus", color: "#7fffd4", moons: 27 },
  { name: "Neptune", color: "#4682b4", moons: 14 }
];

const section = document.querySelector(".listPlanets");

planets.forEach((planet, index) => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.left = `${110 + i * 35}px`;
    moon.style.top = `${Math.random() * 80}px`;
    planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});
