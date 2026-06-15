import { getCell, normalize } from "./helpers.js";

const STATUS = {
  concluido: "status-concluido",
  andamento: "status-andamento",
  cancelado: "status-cancelado",
  manutencao: "status-manutencao",
  viagem: "status-viagem"
};

function getStatusClass(status) {
  const s = normalize(status);

  if (s.includes("concluido")) return STATUS.concluido;
  if (s.includes("andamento")) return STATUS.andamento;
  if (s.includes("cancelado")) return STATUS.cancelado;
  if (s.includes("manutencao")) return STATUS.manutencao;
  if (s.includes("viagem")) return STATUS.viagem;

  return "";
}

export function renderTable(headers, rows) {
  return `
    <table class="table-modern">
      <thead>
        <tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows.map(row => {
          const values = row.map(getCell);
          const status = values.at(-1);

          return `
            <tr class="${getStatusClass(status)}">
              ${values.map(v => `<td>${v || ""}</td>`).join("")}
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
}
