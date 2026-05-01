console.log("Users frontend javascript file");

$(function () {
  $(".member-status").on("change", function (e) {
    const id = e.target.id;
    const memberStatus = $(`#${id}.member-status`).val();

    //Axios updateChosenUser (Rest Api) ga murojat
    axios
      .post("/admin/user/edit", {
        _id: id,
        memberStatus: memberStatus,
      })
      .then((response) => {
        console.log("response:", response);
        const result = response.data;

        if (result.data) {
          console.log("User updated!");
          $(".member-status").blur();
        } else alert("User update failed!");
      })
      .catch((err) => {
        console.log(err);
        alert("User update failed!");
      });
  });
});

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
