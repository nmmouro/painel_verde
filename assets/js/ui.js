export function updateClock(){
  const now = new Date();

  document.getElementById("clock").innerText =
    now.toLocaleDateString("pt-BR") + " — " +
    now.toLocaleTimeString("pt-BR");
}

export function toggleFullscreen(){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  }else{
    document.exitFullscreen();
  }
}
