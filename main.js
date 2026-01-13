const effect = document.getElementById("cursorEffect");

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  // 마우스가 움직일 때 목표 좌표만 갱신
  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate() {
    // 0.1 ~ 0.2 사이가 자연스러움
    const speed = 0.12;

    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;

    effect.style.left = currentX + "px";
    effect.style.top = currentY + "px";

    requestAnimationFrame(animate);
  }

  animate();