export async function carregarAgenda(SHEET_ID) {

  const query = "select B,C,D,E,F,G,H";

  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
    `?sheet=${encodeURIComponent("AGENDA DO DIA")}` +
    `&tq=${encodeURIComponent(query)}` +
    `&tqx=out:json`;

  const res = await fetch(url);
  const json = parseGviz(await res.text());

  return json.table.rows || [];
}


/*
export async function getData(tipo) {
  const res = await fetch(`${API_URL}?tipo=${tipo}`);
  return await res.json();
}
*/
