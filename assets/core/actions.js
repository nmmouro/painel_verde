import { apiPut, apiDelete } from "../services/api.js";
import { state } from "./state.js";

export function startEdit(rowEl){
  state.editingRow = rowEl;
  state.originalData = rowEl.innerHTML;

  rowEl.querySelectorAll("td[data-field]").forEach(td=>{
    const value = td.innerText;

    td.innerHTML = `<input value="${value}" />`;
  });

  toggleButtons(rowEl, true);
}

export function cancelEdit(){
  if(!state.editingRow) return;

  state.editingRow.innerHTML =
    state.originalData;

  state.editingRow = null;
}

export async function saveEdit(rowEl, sheet, rowIndex){

  const data = {};
  
  rowEl.querySelectorAll("td[data-field]")
    .forEach(td=>{
      const field = td.dataset.field;
      const input = td.querySelector("input");

      data[field] = input.value;
    });

  await apiPut(sheet, rowIndex, data);

  location.reload();
}

export async function deleteRow(sheet, rowIndex){

  if(!confirm("Excluir registro?")) return;

  await apiDelete(sheet, rowIndex);

  location.reload();
}


/* UI */
function toggleButtons(row, editing){

  row.querySelector(".btn-edit").style.display =
    editing ? "none" : "inline-block";

  row.querySelector(".btn-save").style.display =
    editing ? "inline-block" : "none";

  row.querySelector(".btn-cancel").style.display =
    editing ? "inline-block" : "none";
}
