import api from "./helpers/harni_api.js";
import {ajax} from "./helpers/ajax.js";
import {Loader} from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { PostCard } from "./components/PostCard.js";

export function App(){
  const d = document,
  $root = d.getElementById("root");
  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

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

console.log(api.API_HARNINA);
}