function mapDisponibilidade(rows){

  const mapa = {};

  rows.forEach(r=>{
    const v = (r.c||[]).map(getCell);

    const motorista = String(v[2]||"").trim().toUpperCase();
    const veiculo = String(v[3]||"").trim().toUpperCase();
    const status = String(v[6]||"").toUpperCase();

    if(motorista) mapa["mot_"+motorista] = status;
    if(veiculo) mapa["veh_"+veiculo] = status;

  });

  return mapa;
}

function getDisponibilidade(nome, mapa, tipo){

  const key =
    tipo === "veiculo"
      ? "veh_"+nome.toUpperCase()
      : "mot_"+nome.toUpperCase();

  const status = mapa[key] || "";

  if(status.includes("MANUTENCAO")){
    return tipo === "veiculo"
      ? '<span class="manutencao">🔧 MANUTENÇÃO</span>'
      : '<span class="livre">🟢 LIVRE</span>';
  }

  if(status.includes("VIAGEM"))
    return '<span class="viagem">✈️ VIAGEM</span>';

  if(status)
    return '<span class="ocupado">🔴 OCUPADO</span>';

  return '<span class="livre">🟢 LIVRE</span>';
}
