setInterval(() => {
  const now = new Date().toLocaleTimeString();
  document.getElementById("clock").innerText = now;
}, 1000);
