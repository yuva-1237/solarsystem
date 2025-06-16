//Main Javascript (main.js)

const planets = [
  { selector: ".orbit-mercury", speed: 4.7, el: null, angle: 0 },
  { selector: ".orbit-venus", speed: 3.5, el: null, angle: 0 },
  { selector: ".orbit-earth", speed: 3.0, el: null, angle: 0 },
  { selector: ".orbit-mars", speed: 2.4, el: null, angle: 0 },
  { selector: ".orbit-jupiter", speed: 1.3, el: null, angle: 0 },
  { selector: ".orbit-saturn", speed: 1.0, el: null, angle: 0 },
  { selector: ".orbit-uranus", speed: 0.7, el: null, angle: 0 },
  { selector: ".orbit-neptune", speed: 0.5, el: null, angle: 0 }
];

const moonOrbit = document.querySelector(".moon-orbit");
let moonAngle = 0;

planets.forEach((p) => (p.el = document.querySelector(p.selector)));

function animate() {
  planets.forEach((p, i) => {
    p.angle += p.speed * 0.005;
    const planet = p.el.querySelector(".planet");
    const r = p.el.offsetWidth / 2;
    planet.style.left = 50 + ((r * Math.cos(p.angle)) / r) * 50 + "%";
    planet.style.top = 50 + ((r * Math.sin(p.angle)) / r) * 50 + "%";
    if (i === 5) {
      const ring = p.el.querySelector(".ring");
      ring.style.left = planet.style.left;
      ring.style.top = planet.style.top;
    }
  });

  // Animate the moon around earth
  if (moonOrbit) {
    moonAngle += 0.02;
    const moon = moonOrbit.querySelector(".moon");
    const r = moonOrbit.offsetWidth / 2;
    moon.style.left = 50 + ((r * Math.cos(moonAngle)) / r) * 50 + "%";
    moon.style.top = 50 + ((r * Math.sin(moonAngle)) / r) * 50 + "%";
  }

  requestAnimationFrame(animate);
}

animate();
