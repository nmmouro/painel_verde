import { getStatusKey } from "./helpers.js";

export function renderTable(data){
  if(!data.length) return "<p>Sem dados</p>";

  const headers = Object.keys(data[0]);

  return `
    <table>
      <thead>
        <tr>
          ${headers.map(h=>`<th>${h}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${data.map(row=>`
          <tr>
            ${headers.map(h=>`<td>${row[h] || ""}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}
