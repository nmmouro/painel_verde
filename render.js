function renderTable(headers, rows){

  return `
  <table>
    <thead>
      <tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr>
    </thead>
    <tbody>

      ${rows.map(row=>{

        const v = (row.c||[]).map(getCell);
        const status = v.at(-1);

        return `
        <tr class="${getStatusClass(status)}">

          ${v.map((cell,i)=>{
            const last = i === v.length - 1;

            return `
              <td class="${last ? "status-icon" : ""}">
                ${last ? getStatusIcon(status) : cell}
              </td>
            `;
          }).join("")}

        </tr>
        `;

      }).join("")}

    </tbody>
  </table>
  `;
}
