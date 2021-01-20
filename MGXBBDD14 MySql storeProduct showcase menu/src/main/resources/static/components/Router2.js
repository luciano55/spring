
import api from "../helpers/harni_api.js";
import {ajax} from "../helpers/ajax.js";
import {PostCard} from "./PostCard.js";
import {PostCardDetail} from "./PostCardDetail.js";

export async function Router2(){


 document.addEventListener("click", (e)=>{
     switch (e.target.id ) {
      case 'firstPage': callApiRest(uri);
      break;
      case 'previousPage': callApiRest(uri+document.getElementById("previousPage").dataset.valor);
        break;
      case 'nextPage': 
         callApiRest(uri+ document.getElementById("nextPage").dataset.valor);
        break;
      case 'endPage': callApiRest(uri+3);
        break;
      /*
      case 'showcaseshmJM': alert("showcaseshmJM");
       case 'showcaseshmCarrusel': alert("showcaseshmCarrusel");
        case 'showcaseshmJesadri': alert("showcaseshmJesadri");
         case 'showcaseshmExamen': alert("showcaseshmExamen");*/
     }    
  });
}

const menuPage = function(posts){
       console.log(posts);
       document.getElementById("currentPage").innerHTML = posts.pageable.pageNumber + 1;
       if  (posts.first){
             document.getElementById("firstPage").style.display = "none";
             document.getElementById("previousPage").style.display = "none";
       }else {
           document.getElementById("previousPage").dataset.valor = posts.pageable.pageNumber - 1;
          document.getElementById("firstPage").style.display = "block";
          document.getElementById("previousPage").style.display = "block";
      }
      if  (posts.last) {
          document.getElementById("nextPage").style.display = "none";
          document.getElementById("endPage").style.display = "none";
      }else {         
          document.getElementById("nextPage").dataset.valor = posts.pageable.pageNumber + 1;
          document.getElementById("nextPage").style.display = "block";
          document.getElementById("endPage").style.display = "block";
       }                  
}
const  callApiRest = async function(uri){  
   await  ajax({
              url:uri,
              cbSuccess : (posts)=>{
                    let html = "";
                    menuPage(posts);
                    posts.content.forEach(post => {                        
                         
                          html += PostCard(post);
                    }); 
                   document.getElementById("main").innerHTML=html;
              }
        });
 document.querySelector(".loader").style.display = "none";
}
let uri = api.API_HARNINA;
 callApiRest(uri);