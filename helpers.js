const parseGviz = txt =>
  JSON.parse(txt.substring(txt.indexOf("{"), txt.lastIndexOf("}") + 1));

const getCell = c => c?.f ?? c?.v ?? "";

function parseDataHoraBR(data, hora="00:00"){
  if(!data) return new Date(0);

  const [dia, mes, ano] = String(data).split("/");
  const [h, m] = String(hora).split(":");

  return new Date(
    Number(ano),
    Number(mes) - 1,
    Number(dia),
    Number(h||0),
    Number(m||0)
  );
}
