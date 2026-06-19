
export async function getData(tipo) {
  const res = await fetch(`${API_URL}?tipo=${tipo}`);
  return await res.json();
}


  async function carregarAgenda(){

const query =
"select B,C,D,E,F,G,H";

const url =

`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +

`?sheet=${encodeURIComponent("AGENDA DO DIA")}` +

`&tq=${encodeURIComponent(query)}` +

`&tqx=out:json`;

const res =
  await fetch(url);

const json =
  parseGviz(await res.text());

const rows =
  json.table.rows || [];


let agendaFiltrada = [];

const dataSelecionada =
  document.getElementById("filtroData")?.value;

if(dataSelecionada){

  const dataBR =
    dateToBR(dataSelecionada);

  

  agendaFiltrada =
    rows.filter(row=>{

      const v =
        (row.c || []).map(getCell);

      return String(v[0] || "").trim() === dataBR;

    });

}else{

  const hoje = new Date();

  hoje.setHours(0,0,0,0);

  agendaFiltrada =
    rows.filter(row=>{

      const v =
        (row.c || []).map(getCell);

      const dataTexto =
        String(v[0] || "");

      let dataAgenda;

      // formato DD/MM/YYYY
      if(dataTexto.includes("/")){

        const partes =
          dataTexto.split("/");

        dataAgenda =
          new Date(
            partes[2],
            partes[1]-1,
            partes[0]
          );

      }

      // formato YYYY-MM-DD
      else if(dataTexto.includes("-")){

        dataAgenda =
          new Date(dataTexto);

      }

      return dataAgenda >= hoje;

    });
