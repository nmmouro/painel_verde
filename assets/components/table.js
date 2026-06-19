import {
  startEdit,
  saveEdit,
  cancelEdit,
  deleteRow
} from "../core/actions.js";

export function renderTable(data, sheet){

  if(!data.length){
    return "<p>Sem dados</p>";
  }

  const headers = Object.keys(data[0]);

  return `
    <table>
      <thead>
        <tr>
          ${headers.map(h=>`<th>${h}</th>`).join("")}
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>

      ${data.map((row, index)=>`

        <tr data-row="${index}">

          ${headers.map(h=>`
            <td data-field="${h}">
              ${row[h] || ""}
            </td>
          `).join("")}

          <td>

            <button class="btn-edit"
              onclick="window.actions.startEdit(this.closest('tr'))">
              ✏️
            </button>

            <button style="display:none"
              class="btn-save"
              onclick="window.actions.saveEdit(
                this.closest('tr'),
                '${sheet}',
                ${index+2}
              )">
              💾
            </button>

            <button style="display:none"
              class="btn-cancel"
              onclick="window.actions.cancelEdit()">
              ❌
            </button>

            <button
              onclick="window.actions.deleteRow(
                '${sheet}',
                ${index+2}
              )">
              🗑
            </button>

          </td>

        </tr>

      `).join("")}

      </tbody>
    </table>
  `;
}
