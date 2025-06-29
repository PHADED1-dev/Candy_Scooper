window.onload = function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  if (!canvas) {
    console.error("Canvas element not found.");
    return;
  }

  let candy = { x: 180, y: 0, radius: 15 };
  let score = 0;

  function drawCandy() {
    ctx.fillStyle = "#ff69b4";
    ctx.beginPath();
    ctx.arc(candy.x, candy.y, candy.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCandy();
    candy.y += 2;
    if (candy.y > canvas.height) {
      candy.y = 0;
      candy.x = Math.random() * canvas.width;
    }
    requestAnimationFrame(gameLoop);
  }

  canvas.addEventListener("click", (e) => {
    const dx = e.offsetX - candy.x;
    const dy = e.offsetY - candy.y;
    if (Math.sqrt(dx * dx + dy * dy) < candy.radius) {
      score++;
      console.log("Scooped! 🍭 Score:", score);
      candy.y = 0;
      candy.x = Math.random() * canvas.width;
    }
  });

  gameLoop();
};
