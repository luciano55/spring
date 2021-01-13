import api from "../helpers/harni_api.js";
import {ajax} from "../helpers/ajax.js";
import {PostCard} from "./PostCard.js";

export function Router(){
    const d = document,
    $posts =  d.getElementById("posts"),
    w = window;
    let {hash} = location;
    console.log(hash);


    if(!hash || hash === "#/"){
      ajax({
  url:api.API_HARNINA,
  cbSuccess : (posts)=>{
    console.log(posts);
    let html = "";
    posts.forEach(post => {
     html += PostCard(post);
    });
    d.querySelector(".loader").style.display = "none";
    d.getElementById("posts").innerHTML=html;
  }
})
    }else   if(hash.includes("#/search")){
      $posts.innerHTML = "<h2>Seccion del Buscador</h2>";
    }else   if(hash === "#/contacto"){
     $posts.innerHTML = "<h2>Seccion del Contacto</h2>";
    }else {
        $posts.innerHTML = "<h2>Aquí cargará el contenido del Post previamente seleccionado</h2>";
    }
   
}