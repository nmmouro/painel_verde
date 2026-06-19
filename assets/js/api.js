import { API_URL } from "./assets/js/config.js";

export async function getSheet(sheet) {
  try {
    const res = await fetch(`${API_URL}?sheet=${encodeURIComponent(sheet)}`);

    if (!res.ok) throw new Error("Erro API");

    const json = await res.json();

    return json.data || [];

  } catch (err) {
    console.error("Erro API:", err);
    return [];
  }
}
