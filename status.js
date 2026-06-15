const STATUS = {
  atendido:{
    icon:'<span style="color:#00ff9c">✔</span>',
    class:"status-atendido"
  },
  concluido:{
    icon:'<span style="color:#7CFC00">✔</span>',
    class:"status-concluido"
  },
  andamento:{
    icon:'<span style="color:#ffcc00">⏳</span>',
    class:"status-andamento"
  },
  cancelado:{
    icon:'<span style="color:#ff4d4d">✖</span>',
    class:"status-cancelado"
  },
  manutencao:{
    icon:'<span style="color:#ff0000">🔧</span>',
    class:"status-manutencao"
  },
  viagem:{
    icon:'<span style="color:#ff9800">✈️</span>',
    class:"status-viagem"
  }
};

function getStatusKey(status=""){
  status = status
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,"");

  if(status.includes("manutencao")) return "manutencao";
  if(status.includes("viagem")) return "viagem";
  if(status.includes("andamento")) return "andamento";
  if(status.includes("atendido")) return "atendido";
  if(status.includes("concluido")) return "concluido";
  if(status.includes("cancelado")) return "cancelado";

  return null;
}

function getStatusClass(status){
  return STATUS[getStatusKey(status)]?.class || "";
}

function getStatusIcon(status){
  return STATUS[getStatusKey(status)]?.icon || "";
}
