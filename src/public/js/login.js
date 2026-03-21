console.log("Login frontend javascript file");

/**=============== SHOW HIDDEN - PASSWORD ===============**/
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    // Change password to text
    if (input.type === "password") {
      // Switch to text
      input.type = "text";

      // Icon change
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      // Change to password
      input.type = "password";

      // Icon change
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

showHiddenPass("login-pass", "login-eye");

/**===== BG Animation =====**/
const canvas = document.querySelector(".liquid-canvas");
const ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const particles = [];
const properties = {
  bgColor: "rgba(3, 7, 18, 0.05)",
  particleColor: "rgba(79, 70, 229, 0.5)",
  particleRadius: 3,
  particleCount: 60,
  particleMaxVelocity: 0.5,
  lineLength: 150,
  particleLife: 6,
};

window.onresize = () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
};

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.velocityX =
      Math.random() * (properties.particleMaxVelocity * 2) -
      properties.particleMaxVelocity;
    this.velocityY =
      Math.random() * (properties.particleMaxVelocity * 2) -
      properties.particleMaxVelocity;
    this.life = Math.random() * properties.particleLife * 60;
  }

  position() {
    (this.x + this.velocityX > width && this.velocityX > 0) ||
    (this.x + this.velocityX < 0 && this.velocityX < 0)
      ? (this.velocityX *= -1)
      : this.velocityX;
    (this.y + this.velocityY > height && this.velocityY > 0) ||
    (this.y + this.velocityY < 0 && this.velocityY < 0)
      ? (this.velocityY *= -1)
      : this.velocityY;
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  reDraw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = properties.particleColor;
    ctx.fill();
  }

  reCalculateLife() {
    if (this.life < 1) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.velocityX =
        Math.random() * (properties.particleMaxVelocity * 2) -
        properties.particleMaxVelocity;
      this.velocityY =
        Math.random() * (properties.particleMaxVelocity * 2) -
        properties.particleMaxVelocity;
      this.life = Math.random() * properties.particleLife * 60;
    }
    this.life--;
  }
}

function reDrawBackground() {
  ctx.fillStyle = properties.bgColor;
  ctx.fillRect(0, 0, width, height);
}

function drawLines() {
  let x1, y1, x2, y2, length, opacity;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      x1 = particles[i].x;
      y1 = particles[i].y;
      x2 = particles[j].x;
      y2 = particles[j].y;
      length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      if (length < properties.lineLength) {
        opacity = 1 - length / properties.lineLength;
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = `rgba(79, 70, 229, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
      }
    }
  }
}

function reDrawParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].reCalculateLife();
    particles[i].position();
    particles[i].reDraw();
  }
}

function loop() {
  reDrawBackground();
  reDrawParticles();
  drawLines();
  requestAnimationFrame(loop);
}

function init() {
  for (let i = 0; i < properties.particleCount; i++) {
    particles.push(new Particle());
  }
  loop();
}

init();

// Create floating orbs
const orbs = document.querySelector(".orbs");
const colors = ["#4f46e5", "#7c3aed", "#06b6d4"];
const numOrbs = 3;

for (let i = 0; i < numOrbs; i++) {
  const orb = document.createElement("div");
  orb.className = "orb";

  const size = Math.random() * 300 + 200;
  const color = colors[i % colors.length];
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const translateX = Math.random() * 100 - 50;
  const translateY = Math.random() * 100 - 50;
  const duration = Math.random() * 10 + 10;

  orb.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                background-color: ${color};
                left: ${left}%;
                top: ${top}%;
                --tx: ${translateX}px;
                --ty: ${translateY}px;
                animation-duration: ${duration}s;
            `;

  orbs.appendChild(orb);
}
