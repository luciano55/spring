
import api from "../helpers/harni_api.js";
import {ajax} from "../helpers/ajax.js";
import {PostCard} from "./PostCard.js";
import {PostCardDetail} from "./PostCardDetail.js";
import { Swipper } from "../showcase/swipper/swipper.js";
import { MySwiper } from "../showcase/swipper/mySwiper.js";
import { Carrusel } from "../showcase/carrusel/carrusel.js";
import { d,$,lS,sS } from "./DomFunction.js";
import { ImageSlider } from "../showcase/imageSlider/imageSlider.js";
import { MyImageSlider } from "../showcase/imageSlider/myImageSlider.js";


export async function Router(){
    const state = {
      data: {} ,
      godata:{},
      visorSize: localStorage.getItem("visorSize"), 
      activePage: localStorage.getItem("activePage"),
      activePageCache: 1,     
      cacheSize: localStorage.getItem("cacheSize"),
      cacheInicio: 0, 
      cacheFinal: localStorage.getItem("visorSize") -1
    }

    const setState = obj => {
      for (let key in obj) {
        if (state.hasOwnProperty(key)) {
          state[key] = obj[key];
        }
      }
    }

  const getState = () => JSON.parse(JSON.stringify(state)); 

  if(!localStorage.getItem("showcaseType")){
        localStorage.setItem("showcaseType", "showcaseshmJM"); 
  }
   let {hash} = location;
   
  $("changeshowcase").addEventListener("click",(e)=>{
       switch (e.target.id ) {
            case 'showcaseshmJM': 
              localStorage.setItem("showcaseType", "showcaseshmJM");
              renderShowcase();        
              break;         
            case 'showcaseshmCarrusel': 
                localStorage.setItem("showcaseType", "showcaseshmCarrusel");
                renderShowcase();
                break;
            case 'showcaseshmJesadri': 
                localStorage.setItem("showcaseType", "showcaseshmJesadri");
                renderShowcase();
                break;
            case 'showcaseshmSwipper':
                  localStorage.setItem("showcaseType", "showcaseshmSwipper");
                  renderShowcase();
                  break;  
            case 'sizeVisorI' :
              let visorSize =  localStorage.getItem("visorSize");
              let activePage =   localStorage.getItem("activePage");
              visorSize--;
              if (visorSize > 0){
                  let  url = api.API_HARNINA + activePage  + "&size=" +visorSize;
                  callApiRest(url);   
                  localStorage.setItem("visorSize",visorSize); 
                   // if  (activePage < getState().data.totalelements/visorSize  or getState().data.pageable.pageSize)                 else {localStorage.setItem("activePage",1);}
           
              }
              

              break;    
        }
   });
  $("main").addEventListener("click",(e)=>{
     switch (e.target.id ) {
            case 'cardDetail': 
              renderShowcase();
              break;         
            case 'seeMobil': 
            case 'carrusel': 
              renderDetail(e.target.dataset.valor);      
              break; 
      }  
   });

  $("div_menu_page").addEventListener("click",(e)=>{
       let uri =  "http://localhost:8085/storerest/?";

        const pageActive= +e.target.innerHTML;

        if(pageActive>0){callApiRest(uri+(pageActive - 1));        }

        const   cacheLength = +getState().data.content.length,
                    cacheInicio = +getState().cacheInicio,
                     cacheFinal = +getState().cacheFinal,
                     visorSize =   +getState().visorSize,
                     activePageCache = +getState().activePageCache,
                     cacheSize = +getState().cacheSize;


 
     switch (e.target.id ) {
      case 'botonInicio':
          callApiRest(uri+document.getElementById("botonInicio").dataset.valor + "&size=6");
          break;
      case 'botonEnd':
               // pageT 0 -- > 1 / 1,2 /  1,2 / 1,2
               // pageT 1 -- > 2 / 3,4 / 3,4 / 3,4
               // pageT 2 ---> 3 / 5, 6 / 5
               // pageT 3 ---> 4 / 7,8
              //  ............................................................
              // pageT14 -- >15
           let endPage = +document.getElementById("botonEnd").dataset.valor; // pag. 8
          const newPageToTransferred =  Math.ceil(((endPage) * visorSize)/(visorSize*2)) -1;// pageT 3
          const lastPageActive =+localStorage.getItem("activePage");//  ¿4?
          const endPageTransferred =  Math.ceil(((lastPageActive) * visorSize)/(visorSize*2)) -1;  //¿1? 

          // si ultimapagetransferida  = newpage
      
        //   alert("endPage:" + endPage +"lastPageActive:" + lastPageActive);
        
             //const endPageTransferred =  Math.ceil(((lastPageActive) * visorSize)/(visorSize*2)) -1;  // 3

            
                // si ultimapagetransferida  = newpage
           //const lastPageActive =+localStorage.getItem("activePage");// 8
        //   alert("endPage:" + endPage +"lastPageActive:" + lastPageActive);
           
           //alert("endPage:" + endPage  + "endPageTransferred: " +endPageTransferred + "   newPageToTransferred: " + newPageToTransferred + "lastPageActive:" + lastPageActive);


let inicio, final;
           if(endPageTransferred == newPageToTransferred ){
              alert("Estoy en la misma cache");
                    // ir al último registro de la cache                  

           }else {
                        alert("Estoy en otra cache");
                        /*
                       const size =  getState().cacheSize,
                                 visorSize = getState().visorSize,
                                 endPage = +document.getElementById("botonEnd").dataset.valor,     
                                 page =  Math.ceil(((endPage) * visorSize)/(visorSize*2))-1 ;  */     callGoApiRest("http://localhost:8085/storerest/?page=" +newPageToTransferred+"&size="+ getState().cacheSize ); 
           }
                // ir al último de la cache





             if(cacheLength <= visorSize ){
                                        inicio = 0;
                                        final = cacheLength -1;
                    }else {
                      inicio = Math.ceil(cacheLength / visorSize) ;
                      final = cacheSize -  (cacheSize - cacheLength) - 1;
                    }
                     alert("inicio: " + inicio +"    final: "+ final);

                setState({activePageCache : 2,cacheInicio :inicio,cacheFinal:final});
               
                    renderShowcase();  

        
          break;
     case 'botonNext':        
         const nextPage = +document.getElementById("botonNext").dataset.valor;
                    
                  //   alert("cacheInicio:" + cacheInicio + "cacheFinal:" + cacheFinal+ "nextPage:" + nextPage + "activePageCache: " + activePageCache );       
                      
          if (cacheLength >   (cacheFinal + visorSize) || cacheLength < cacheSize )
          {
               if(cacheLength < cacheSize ) {
                        setState({cacheInicio : cacheFinal +1, cacheFinal: cacheFinal + 
                Math.floor(cacheLength / visorSize) ,activePageCache: activePageCache +1})
                }else {
                        setState({cacheInicio : cacheFinal +1, cacheFinal: cacheFinal+ visorSize ,activePageCache: activePageCache +1});
                }
              //    alert("avanzamos hasta la última: " + getState().cacheFinal);
                  renderShowcase();
          }else           
          {    
            //alert("Se agotó la cache");
            setState({activePageCache : 1,cacheInicio :0,cacheFinal:visorSize-1});
          const page =  Math.ceil(((nextPage) * visorSize)/(visorSize*2)) ;
          //alert("PAge:" + page);
           
            callApiRest(uri+"page="+ page + "&size="+getState().cacheSize );

          }
       
          break;

     case 'botonPrev':
         callApiRest(uri+document.getElementById("botonPrev").dataset.valor+ "&size=6");
          break;
/*
      case 'firstPage': 
        callApiRest(uri);
         break;
      case 'previousPage': 
        callApiRest(uri+document.getElementById("previousPage").dataset.valor+ "&size=6");
        break;
      case 'nextPage': 
         callApiRest(uri+ document.getElementById("nextPage").dataset.valor+ "&size=6");
         break;
      case 'endPage': 
        callApiRest(uri+document.getElementById("endPage").dataset.valor+ "&size=6");
        break;  */
     }  
   });

const renderShowcase = function(){
   document.getElementById("div_menu_page").style.display ="block";
   document.getElementById("changeshowcase").style.display ="block";
   let html;
  switch (localStorage.getItem("showcaseType")) {   
      
          case '':                          
          case 'showcaseshmJM': 
              document.getElementById('showcaseshmJM').checked = true;
             document.getElementById("main").innerHTML = render(PostCard);
              break;
          case 'showcaseshmCarrusel': 
            document.getElementById('showcaseshmCarrusel').checked = true;
            renderShowcaseShmCarrusel();
            break;
          case 'showcaseshmJesadri':
              document.getElementById('showcaseshmJesadri').checked = true;
              html = "<div class='bodyImg' id='bodyImg'><div class='slider-container'>";
              html += render(ImageSlider);
              html +=  "<button class='arrow left-arrow' id='left'><i class='fas fa-arrow-left'></i></button><button class='arrow right-arrow' id='right'><i class='fas fa-arrow-right'></i></button> </div></div>";
              document.getElementById("main").innerHTML = html ;      

              MyImageSlider();       
             break;                        
           case 'showcaseshmSwipper': 
               document.getElementById('showcaseshmSwipper').checked = true;
               html = "<div class='swiper-container'> <div class='swiper-wrapper'>";      
               html += render(Swipper);
               html += "</div>";
               html += "<div class='swiper-pagination'></div>  <div class='swiper-scrollbar'></div></div>" ;
              document.getElementById("main").innerHTML=html;  

              MySwiper();
               break;
   }
                  
}
const  preRender = function(){
     setState({visorSize: lS.getItem("visorSize"),cacheSize : lS.getItem("cacheSize")}); 
 
  let inicio = getState().cacheInicio;  
  let final =  getState().cacheFinal;  
  console.log(inicio,",",final);

  const data = getState().data;
   console.log("data:",data);     

  let activeData = [];
     
 for(let i = inicio; i<= final; i++){
          activeData.push(data.content[i]);
 }
 console.log("activeData(cache):", activeData);
return activeData;
}
const render = function(showcase){
   let html = "";
const activeData = preRender();
 activeData.forEach(post => {       
            html += showcase(post);
 }); 
 return html;   
}
const renderShowcaseShmCarrusel = function(){
    let html = "";
     document.getElementById("main").innerHTML= "";   
    let $giran = document.createElement("div");
    $giran.id = "giran";
    document.getElementById("main").appendChild($giran);
    $giran  = document.getElementById("giran");
    const activeData = preRender();
    let i = 0;
    activeData.forEach(post => {
          $giran.appendChild(Carrusel(post, i, activeData.length));       
           i++;        
     });      

}

const renderDetail = async function(id){
   document.querySelector(".loader").style.display = "block";
              await  ajax({
                                    url:"http://localhost:8085/storerest/" + id,
                                      cbSuccess : (post)=>{
                                        console.log(post);
                                        let html = PostCardDetail(post);
                                        document.getElementById("main").innerHTML=html;
                                      }
                        })
        document.getElementById("div_menu_page").style.display ="none";
        document.getElementById("changeshowcase").style.display ="none";
        document.querySelector(".loader").style.display = "none";
}
const  callApiRest = async function(uri){  
   await  ajax({
              url:uri,
              cbSuccess : (posts)=>{             
              console.log("callApiRest:" , posts)
                setState({
                     data: posts                     
                  });              
                 renderShowcase();              
              }
        });
 document.querySelector(".loader").style.display = "none"; 
}
const  callGoApiRest = async function(uri){  
   await  ajax({
              url:uri,
              cbSuccess : (posts)=>{             
            //  console.log("callGoApiRest:" , posts)
                setState({
                     data: posts                     
                  });    
                    console.log("callGoApiRest data:" , getState().data) ;         
              }
        });
 document.querySelector(".loader").style.display = "none"; 
}
 if(!hash || hash == "#/"){     
   
     callApiRest("http://localhost:8085/storerest/?page=0&size="+getState().cacheSize);    
       
 }else if(hash.includes("#/post/")){ 
          console.log("/post/",getState());          
        const post = hash.split("/");
        await  ajax({
                       url:"http://localhost:8085/storerest/" + post[2],
                        cbSuccess : (post)=>{
                           console.log(post);
                           let html = PostCardDetail(post);
                           document.getElementById("main").innerHTML=html;
                        }
          })
        document.getElementById("div_menu_page").style.display ="none";
        document.getElementById("changeshowcase").style.display ="none";
        document.querySelector(".loader").style.display = "none";
    }else if(hash.includes("#/render")){ 
      console.log("/render",getState());    
         renderShowcase();       
          }
  
}

