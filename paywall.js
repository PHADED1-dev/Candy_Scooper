document.addEventListener("DOMContentLoaded", function () {
  const isUnlocked = false; // Change this to true to unlock game without paywall
  const paywall = document.getElementById("paywall");
  const canvas = document.getElementById("gameCanvas");

  if (isUnlocked) {
    paywall.style.display = "none";
    canvas.style.display = "block";
  } else {
    paywall.style.display = "block";
    canvas.style.display = "none";
  }
});
