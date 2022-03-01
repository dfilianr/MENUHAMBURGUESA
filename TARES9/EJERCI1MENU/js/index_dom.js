import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { shortcuts } from "./dom/teclado.js";
 
const d = document;

d.addEventListener("DOMContentLoaded", e=>{
  hamburgerMenu(".panel-btn",".panel","menu a");  
  digitalClock("#relij","#activar-reloj","#desactivar-reloj");
  alarm("assets/alarma.mp3.mp3","#activar-alarma","#desactivar-alarma");
});

d.addEventListener("Keydown",(e)=> {
    shortcuts(e);
});