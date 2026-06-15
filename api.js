import { CONFIG } from "./config.js";

function parseGviz(text) {
  return JSON.parse(
    text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1)
  );
}

export async function fetchSheet(tab) {
  const url = `
    https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}/gviz/tq
    ?sheet=${encodeURIComponent(tab.sheet)}
    &tq=${encodeURIComponent(tab.query)}
    &tqx=out:json
  `;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);

    const json = parseGviz(await res.text());

    return json.table.rows || [];

  } catch (err) {
    console.error(`Erro ${tab.sheet}`, err);
    return [];
  }
}
