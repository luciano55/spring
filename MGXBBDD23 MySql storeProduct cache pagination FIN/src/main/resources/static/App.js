
import {Loader} from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { Footer } from "./components/Footer.js";
import { FooterPage } from "./components/FooterPage.js";
import { FooterPageButton } from "./components/FooterPageButton.js";

export function App(){

  const visorSize = 2, 
   cacheSize = visorSize * 2;
        

  if(!localStorage.getItem("visorSize")) {
     localStorage.setItem("visorSize",visorSize);
     localStorage.setItem("activePage",1);
     localStorage.setItem("cacheSize", cacheSize);
  }
localStorage.setItem("visorSize",visorSize); // Eliminar en explotación
localStorage.setItem("activePage",1);// Eliminar en explotación
localStorage.setItem("cacheSize", cacheSize);// Eliminar en explotación
 


 const  $root = document.getElementById("root");
  $root.innerHTML = null;
  Header($root);
  $root.appendChild(Main());
  $root.appendChild(Loader()); 
  FooterPageButton();
   // Router(); Ej. Se puede controlando las promesas. problema de acoplamiento

}