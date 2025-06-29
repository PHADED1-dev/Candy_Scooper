
window.onload = function () {
  const gameContainer = document.getElementById('game');
  gameContainer.innerHTML = `
    <button id="startBtn">Play Level 1</button>
  `;

  document.getElementById('startBtn').onclick = function () {
    alert("Level 1 complete! 🎉 Want to unlock the full game?");
    showPaywall();
  };
};
