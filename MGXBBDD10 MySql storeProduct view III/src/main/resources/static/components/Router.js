import api from "../helpers/harni_api.js";
import {ajax} from "../helpers/ajax.js";
import {PostCard} from "./PostCard.js";
import {PostCardDetail} from "./PostCardDetail.js";



export async function Router(){
    const d = document,
    $main =  d.getElementById("main"),
    w = window;
    let {hash} = location;
    console.log(hash);
  $main.innerHTML = null;

    if(!hash || hash === "#/"){
     await  ajax({
  url:api.API_HARNINA,
  cbSuccess : (posts)=>{
    console.log(posts);
    let html = "";
    posts.forEach(post => {
     html += PostCard(post);
    });
 
    d.getElementById("main").innerHTML=html;
  }
})
    }else  if(hash.includes("#/search")){
      $main.innerHTML = "<h2>Seccion del Buscador</h2>";
    }else   if(hash === "#/contacto"){
     $main.innerHTML = "<h2>Seccion del Contacto</h2>";
    }else if(hash.includes("#/post/")){       
        const post = hash.split("/");
        await  ajax({
  url:"http://localhost:8085/storerest/" + post[2],
  cbSuccess : (post)=>{
    console.log(post);
    let html = PostCardDetail(post);


    /*
    posts.forEach(post => {
     html += PostCard(post);
    });
 */
    d.getElementById("main").innerHTML=html;
  }
})
     //   $main.innerHTML = "<h2>Aquí cargará el contenido del Post previamente seleccionado</h2>";
    }
      d.querySelector(".loader").style.display = "none";
}