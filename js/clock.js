document.addEventListener("DOMContentLoaded", () => {

  function updateClock() {
    document.getElementById("clock").innerText =
      new Date().toLocaleTimeString("pt-BR") +
    " — " +
    now.toLocaleTimeString("pt-BR",
      {
        hour:"2-digit",
        minute:"2-digit"
      });
  }

  updateClock();
  setInterval(updateClock, 1000);

});

/*


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

updateClock();              // executa imediatamente
setInterval(updateClock, 1000); // atualiza a cada segundo
 

setInterval(() => {
  const now = new Date().toLocaleTimeString();
  document.getElementById("clock").innerText = now;
}, 1000);
*/
