/*
export async function getData(tipo) {
  const res = await fetch(`${API_URL}?tipo=${tipo}`);
  return await res.json();
}
*/



  export function updateClock() {
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


