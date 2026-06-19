/*
document.getElementById("btnFullscreen")
  .addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
*/




document.getElementById("toggle-fullscreen")
  .onclick = async () => {

  if(!document.fullscreenElement){

    await document.documentElement
      .requestFullscreen();

  }else{

    await document.exitFullscreen();
  }
};
