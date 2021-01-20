export  let carousel= {
    "showcaseType" : "shmLuqui",   
 params :{
                myClass : ["contenido01 heigth10em",""],
                myIdContainer : ["showcase" ,"giran"],
                myIdContainerDest : "giran",
                myFunction : STORE.showcaseCarouselBox
            },
setIniShowcase: {

}

             //STORE.ManagerShowcase.setIniShowcase(params);
            // STORE.ManagerShowcase.getAllCarousel(params);
}

/*STORE.namespace('STORE.ManagerShowcase');

STORE.ManagerShowcase = {
    pageItem : 5,  // carrusel
    block : 2, // nº de pageItem por transferencia
    ajax : STORE.Ajax,
    globalItem : 0,
    globalPage : 0,
    activePage : 1,
    itemTransferred : 0, // nº de elementos transferidos
    rowsTransferred : 0, // elementos transferidos
    firstPageBlock : 0,
    lastPageBlock : 0,
    initActiveBlock: 0, // comienzo del bloque activo
    showcaseType: "shmLuqui",
    limitStart:0,
    limitCounts: 0,
    init : function(){
        var myTable = "model";
        var json = JSON.stringify(myTable);
        var llamada = new STORE.ManagerShowcase.ajax.CargadorContenidos("/getCountRow", function () {
                var countsRow = JSON.parse(llamada.req.responseText);
                STORE.ManagerShowcase.globalItem = countsRow;
                STORE.ManagerShowcase.globalPage = Math.ceil(STORE.ManagerShowcase.globalItem / STORE.ManagerShowcase.pageItem);
                STORE.ManagerShowcase.limitCounts = (STORE.ManagerShowcase.pageItem * STORE.ManagerShowcase.block);
                STORE.ManagerShowcase.showPagination();
                STORE.ManagerShowcase.getModel();
        }, json);
    },
    showPagination: function(){
        STORE.pagination.Init(document.getElementById('pagination'), {
            size: STORE.ManagerShowcase.globalPage, // pages size
            page: STORE.pagination.getActivePage(),  // selected page
            step: 3,   // pages before and after current
            functionClick: STORE.ManagerShowcase.getActivePagePagination
        });
    },
    getModel : function(){
        if (STORE.ManagerShowcase.limitStart < 0) {
            STORE.ManagerShowcase.limitStart = 0;
        }
        var envio = {
            limitStart: STORE.ManagerShowcase.limitStart.toString(),
            limitCounts: STORE.ManagerShowcase.limitCounts.toString(),
        };
        var json = JSON.stringify(envio);
        var llamada = new STORE.ManagerShowcase.ajax.CargadorContenidos("/getModelCache", function () {
            STORE.ManagerShowcase.rowsTransferred = JSON.parse(llamada.req.responseText);
            STORE.ManagerShowcase.itemTransferred = STORE.ManagerShowcase.rowsTransferred.length;
            STORE.ManagerShowcase.initActiveBlock = 0;
            STORE.ManagerShowcase.firstPageBlock = STORE.ManagerShowcase.activePage;
            STORE.ManagerShowcase.lastPageBlock = STORE.ManagerShowcase.activePage + (Math.ceil(STORE.ManagerShowcase.rowsTransferred.length /  STORE.ManagerShowcase.pageItem) - 1);
            STORE.ManagerShowcase.createShowcase();
        }, json);
    },
    createShowcase: function(){
        if(STORE.ManagerShowcase.showcaseType == "shmLuqui") {
            var params ={
                myClass : ["contenido01"],
                myIdContainer : ["showcase"],
                myIdContainerDest : "showcase",
                myFunction : STORE.showcaseSmallProductBox
            };
           STORE.ManagerShowcase.setIniShowcase(params);
           STORE.ManagerShowcase.getAllCarousel(params);
        }
        if(STORE.ManagerShowcase.showcaseType == "shmCarrusel"){
            var params ={
                myClass : ["contenido01 heigth10em",""],
                myIdContainer : ["showcase" ,"giran"],
                myIdContainerDest : "giran",
                myFunction : STORE.showcaseCarouselBox
            };
            STORE.ManagerShowcase.setIniShowcase(params);
            STORE.ManagerShowcase.getAllCarousel(params);
    }
        if(STORE.ManagerShowcase.showcaseType == "shmJesadri") {
            var params ={
                myClass : ["contenido01 heigth10em"],
                myIdContainer : ["showcase"],
                myIdContainerDest : "showcase",
                myFunction : STORE.showcaseAdrianBox
            };
            STORE.ManagerShowcase.setIniShowcase(params);
            STORE.ManagerShowcase.getAllCarousel(params);
        }
        if(STORE.ManagerShowcase.showcaseType == "shmExamen") {
            var params = {
                myClass: ["contenido01", "swiper-container", "swiper-wrapper"],
                myIdContainer: ["showcase", "swiper-container", "swiper-wrapper"],
                myIdContainerDest : "swiper-wrapper",
                myFunction: STORE.showcaseSwiperBox
            };
            STORE.ManagerShowcase.setIniShowcase(params);

            STORE.ManagerShowcase.getAllCarousel(params);

            var paramsEnd = {
                label : ["div","div"],
                myClass : ["swiper-pagination","swiper-scrollbar"],
                myIdContainer: ["swiper-pagination","swiper-scrollbar"],
                myIdContainerDest: "swiper-container"
            }
            STORE.ManagerShowcase.setEndShowcase(paramsEnd);

            var swiper = new Swiper(".swiper-container", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 350,
                    modifier: 1,
                    slideShadows: true },

                pagination: {
                    el: ".swiper-pagination" } });
        }
    },
    getActivePagePagination : function(){
        var direccion = 1;
        if  (STORE.ManagerShowcase.activePage > STORE.pagination.getActivePage()){
            direccion = 0;
        }
        var oldActivePage = STORE.ManagerShowcase.activePage;
        STORE.ManagerShowcase.activePage = STORE.pagination.getActivePage();

        if (STORE.ManagerShowcase.activePage > STORE.ManagerShowcase.lastPageBlock) {
            STORE.ManagerShowcase.limitStart = STORE.ManagerShowcase.limitStart + ((STORE.ManagerShowcase.activePage - STORE.ManagerShowcase.firstPageBlock) * STORE.ManagerShowcase.pageItem);
            STORE.ManagerShowcase.getModel();
        }else {
            if ((STORE.ManagerShowcase.activePage < STORE.ManagerShowcase.firstPageBlock) && (STORE.ManagerShowcase.firstPageBlock > 0) ) {
                STORE.ManagerShowcase.limitStart = STORE.ManagerShowcase.limitStart - ((STORE.ManagerShowcase.firstPageBlock - STORE.ManagerShowcase.activePage)* STORE.ManagerShowcase.pageItem);
                STORE.ManagerShowcase.getModel();
            }
            else {
                if(direccion){
                    STORE.ManagerShowcase.initActiveBlock = STORE.ManagerShowcase.initActiveBlock  + ((STORE.ManagerShowcase.activePage - oldActivePage) * STORE.ManagerShowcase.pageItem);
                } else {
                    STORE.ManagerShowcase.initActiveBlock = STORE.ManagerShowcase.initActiveBlock  - (Math.abs((STORE.ManagerShowcase.activePage - oldActivePage) * STORE.ManagerShowcase.pageItem));
                }
                STORE.ManagerShowcase.createShowcase();
            }
        }

    },
    viewProduct : function(data){
        STORE.removeChildren("showcase");
        var showcase = $("showcase");
        showcase.className = "contenido01";
        $("showcase").appendChild(STORE.showcaseBigProductBox(data));
    },
    changeShowcase: function(evt){
        STORE.ManagerShowcase.showcaseType = evt.target.id;
        //STORE.ManagerShowcase.showcaseType = evt.target.dataset.change;
        STORE.ManagerShowcase.createShowcase();
    },
    setIniShowcase : function(params){
        STORE.removeChildren("showcase");
        var showcase = $("showcase");
        showcase.className = params.myClass[0];
        var nodos = [$("showcase")];
        for (var i = 1; i < params.myIdContainer.length; i++){
            var nodo = document.createElement("div");
            nodo.id =  params.myIdContainer[i];
            nodo.className = params.myClass[i];
            nodos.push(nodo);
        }
        for (var i = 1; i < nodos.length; i++){
            nodos[i-1].appendChild(nodos[i]);
        }
    },
    getAllCarousel : function(params) {
        for (var i = STORE.ManagerShowcase.initActiveBlock; i < (STORE.ManagerShowcase.initActiveBlock + STORE.ManagerShowcase.pageItem) && i < STORE.ManagerShowcase.itemTransferred; i++) {
            STORE.ManagerShowcase.rowsTransferred[i].angulo = (360 / STORE.ManagerShowcase.pageItem) * i;
            $(params.myIdContainerDest).appendChild(params.myFunction(STORE.ManagerShowcase.rowsTransferred[i]));
        }
    },
    setEndShowcase : function(paramsEnd){
        //alert("setEndShowcase");
        var nodos = [$(paramsEnd.myIdContainerDest)];
        for (var i = 0; i < paramsEnd.myIdContainer.length; i++){
            var nodo = document.createElement("div");
            nodo.id =  paramsEnd.myIdContainer[i];
            nodo.className = paramsEnd.myClass[i];
            nodos.push(nodo);
        }
        for (var i = 1; i < nodos.length; i++){
            nodos[0].appendChild(nodos[i]);
        }
    },
    getObjectModelJson : function(id){
        for (var i = 0; i < STORE.ManagerShowcase.rowsTransferred.length; i++) {
            if (STORE.ManagerShowcase.rowsTransferred[i].idModel == id){
                return STORE.ManagerShowcase.rowsTransferred[i];
            }
        }
    },

};
*/