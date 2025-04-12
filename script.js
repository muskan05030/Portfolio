// Add smooth scroll to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight active section in nav
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });


  const canvas = document.getElementById('bg-animation');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

let increment = 0;

function animateWave() {
  ctx.clearRect(0, 0, w, h);
  ctx.beginPath();
  ctx.moveTo(0, h / 2);
  for (let x = 0; x <= w; x++) {
    ctx.lineTo(x, h / 2 + 20 * Math.sin(x * 0.02 + increment));
  }
  ctx.strokeStyle = 'rgba(255, 0, 255, 0.3)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  increment += 0.03;
  requestAnimationFrame(animateWave);
}

animateWave();


  const rotateBoxStyle = document.createElement('style');
  rotateBoxStyle.innerHTML = `
    .three-d-box {
      width: 80px;
      height: 80px;
      border: 2px solid #ff00ff;
      position: fixed;
      bottom: 100px;
      left: 50px;
      animation: spinCube 6s linear infinite;
      transform-style: preserve-3d;
    }
    .three-d-box.second {
      bottom: 200px;
      left: 120px;
      animation-delay: 3s;
    }
    @keyframes spinCube {
      0% { transform: rotateX(0deg) rotateY(0deg); }
      50% { transform: rotateX(180deg) rotateY(180deg); }
      100% { transform: rotateX(360deg) rotateY(360deg); }
    }
  `;
  document.head.appendChild(rotateBoxStyle);


