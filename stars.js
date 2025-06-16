// Stars Javascript (stars.js)

const starContainer = document.getElementById("stars");
const numStars = 150; // Adjust for more/less stars

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.className = "star";
  // Random position
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  // Random size
  const size = Math.random() * 1.5 + 0.5;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  // Random animation speed
  star.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
  starContainer.appendChild(star);
}
