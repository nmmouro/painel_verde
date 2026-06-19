import { TABS } from "./config.js";
import { getSheet } from "./api.js";
import { renderTable } from "./render.js";
import { updateClock } from "./ui.js";

const app = document.getElementById("app");

async function loadAll(){

  const results = {};

  for(const tab of TABS){
    results[tab.id] =
      await getSheet(tab.sheet);
  }

  render(results);
}

function render(data){

  app.innerHTML = "";

  for(const key in data){

    const section =
      document.createElement("section");

    section.className = "card";

    section.innerHTML = `
      <h2>${key.toUpperCase()}</h2>
      ${renderTable(data[key])}
    `;

    app.appendChild(section);
  }
}

setInterval(loadAll, 30000);
setInterval(updateClock, 1000);

loadAll();
updateClock();
