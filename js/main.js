import { obterAgendaHoje} from ".js/agenda.js";

const agendaRows =
  await obterAgendaHoje(SHEET_ID);



import { getData } from "../app/api.js";
import { store } from "../app/store.js";
import { renderList } from "../app/ui.js";

import "./clock.js";
import "./fullscreen.js";

async function load() {
  store.painel = await getData("painel");
  store.agenda = await getData("agenda");
  store.social = await getData("social");

  render();
}

function render() {
  renderList(document.getElementById("painelData"), store.painel);
  renderList(document.getElementById("agendaData"), store.agenda);
  renderList(document.getElementById("socialData"), store.social);
}

load();
