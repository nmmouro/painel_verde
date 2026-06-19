export function normalizar(txt=""){
  return txt.toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu,"");
}

export function getStatusKey(status){
  status = normalizar(status);

  if(status.includes("manutencao")) return "manutencao";
  if(status.includes("viagem")) return "viagem";
  if(status.includes("andamento")) return "andamento";
  if(status.includes("atendido")) return "atendido";
  if(status.includes("concluido")) return "concluido";
  if(status.includes("cancelado")) return "cancelado";

  return null;
}
