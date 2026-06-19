
export async function getData(tipo) {
  const res = await fetch(`${API_URL}?tipo=${tipo}`);
  return await res.json();
}
