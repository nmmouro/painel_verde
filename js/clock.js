  function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerText =
      now.toLocaleDateString("pt-BR") +
      " — " +
      now.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
      });
  }

  setInterval(updateClock, 1000);
  updateClock();





/*


setInterval(() => {
  const now = new Date().toLocaleTimeString();
  document.getElementById("clock").innerText = now;
}, 1000);
*/
