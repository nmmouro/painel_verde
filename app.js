import { CONFIG } from "./config.js";
import { fetchSheet } from "./api.js";
import { renderTable } from "./components.js";

const app = document.getElementById("app");

async function loadDashboard() {
  const results = await Promise.all(
    CONFIG.TABS.map(fetchSheet)
  );

  app.innerHTML = "";

  CONFIG.TABS.forEach((tab, index) => {
    const rows = results[index];

    const section = document.createElement("section");
    section.className = "card";

    section.innerHTML = `
      <h2>${tab.title}</h2>
      ${renderTable(
        CONFIG.TABS[index].headers || [],
        rows
      )}
    `;

    app.appendChild(section);
  });
}

setInterval(loadDashboard, 15000);
loadDashboard();
