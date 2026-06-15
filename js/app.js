let lastHash = "";
let intervalo = 30000;

async function loadAll(){

  const results = await Promise.all(TABS.map(fetchSheet));

  const hash =
    results.map(r=>r.table.rows.length).join("-");

  if(hash !== lastHash){
    playBeep();
    intervalo = 5000;
  }else{
    intervalo = 30000;
  }

  lastHash = hash;

  renderApp(results);
}

/* RENDER PRINCIPAL */

function renderApp(results){

  const app = document.getElementById("app");
  app.innerHTML = "";

  const veiculos = results[0].table.rows || [];
  const motoristas = results[1].table.rows || [];
  const painel = results[2].table.rows || [];

  const mapa = mapDisponibilidade(painel);

  /* VEÍCULOS */
  app.innerHTML += `
  <section class="card">
    <h2>VEÍCULOS</h2>
    ${renderTable(
      ["Placa","Status","KM","Combustível"],
      veiculos.map(r=>{
        const v = (r.c||[]).map(getCell);
        return {
          c:[
            {v:v[0]},
            {v:getDisponibilidade(v[0],mapa,"veiculo")},
            {v:v[2]+" km"},
            {v:"⛽ "+v[3]}
          ]
        };
      })
    )}
  </section>`;

  /* MOTORISTAS */
  app.innerHTML += `
  <section class="card">
    <h2>MOTORISTAS</h2>
    ${renderTable(
      ["Motorista","Status","Condição"],
      motoristas.map(r=>{
        const v = (r.c||[]).map(getCell);
        return {
          c:[
            {v:v[0]},
            {v:getDisponibilidade(v[0],mapa,"motorista")},
            {v:v[2]}
          ]
        };
      })
    )}
  </section>`;
}

/* LOOP */

async function loop(){
  await loadAll();
  setTimeout(loop, intervalo);
}

/* AUDIO */

const audio = document.getElementById("beep");
let soundEnabled = true;

function playBeep(){
  if(!soundEnabled) return;
  audio.currentTime = 0;
  audio.play().catch(()=>{});
}

document.getElementById("toggle-audio").onclick = ()=>{
  soundEnabled = !soundEnabled;
};

/* FULLSCREEN */

document.getElementById("toggle-fullscreen").onclick = async ()=>{
  if(!document.fullscreenElement){
    await document.documentElement.requestFullscreen();
  }else{
    await document.exitFullscreen();
  }
};

/* CLOCK */

setInterval(()=>{
  const d = new Date();
  document.getElementById("clock").innerText =
    d.toLocaleDateString("pt-BR") +
    " — " +
    d.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});
},1000);

/* INIT */

loop();
