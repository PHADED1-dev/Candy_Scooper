
function showPaywall() {
  const gameContainer = document.getElementById('game');
  gameContainer.innerHTML = `
    <h2>Unlock Full Version</h2>
    <p>Get all levels for just $1.99!</p>
    <a href="https://www.paypal.me/phaded91/1.99" target="_blank">
      <button>Pay with PayPal</button>
    </a>
  `;
}
