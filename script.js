window.addEventListener("load", function () {
   main();
});

function main(){
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles3();
    esemenyKezeles4();
}


function elemekElerese1() {
    const ELEM = $("section h2")
    console.log("1. Feladat:" + ELEM.html());

}

function elemekElerese2() {

    const ELEM = $("#ide");
    ELEM.html("<p>Jo reggelt!</p>");
}
function elemekElerese3() {

    const ELEM = $(".ide");
    ELEM.html("<p>Jo reggelt!</p>");
}

function elemekElerese4() {
    const LISTA_ELEMENT = $(".lista");
    const LISTA = [];
    for (let index = 0; index < 5; index++) {
        let tizEsHarmincKozottVeletlen = Math.floor(Math.random() * (30-10)+ 10);
        LISTA.push(tizEsHarmincKozottVeletlen);
    }
    
    
    let listaMegjelenitesFelsorolasban = `<ul>`
    for (let index = 0; index < LISTA.length; index++) {
        listaMegjelenitesFelsorolasban +=  
        `<li>
            ${LISTA[index]}
        </li>`
        
    }
    listaMegjelenitesFelsorolasban += `</ul>`;
   LISTA_ELEMENT.html(listaMegjelenitesFelsorolasban);

   return  listaMegjelenitesFelsorolasban;

   
}

function elemekFormazasa1(){
    const SECTION_LISTA_CLASS = $("section .lista");
    SECTION_LISTA_CLASS.addClass("formazott");
}

function esemenyKezeles1() {
    const SECTION_LISTA_CLASS = $("section .lista");
    const KATTINTAS_UTAN = $(".kattintasutan");
    
    SECTION_LISTA_CLASS.on("click", function() {
        KATTINTAS_UTAN.append(elemekElerese4());
    });
}

function esemenyKezeles2(){
    const FELADAT = $(".feladat");
    FELADAT.append(`<button class="okBtn">OK</button>`);
    FELADAT.on("click",function(){
        FELADAT.append(`<img src="549-536x354.jpg" alt="loremPicsum" class="loremKep">`);
    });
}
 
function esemenyKezeles3(){
    const LOREM_KEP =  $(".feladat");
    LOREM_KEP.on("mouseenter", function(){
        LOREM_KEP.append(`<style>
                                    .loremKep{
                                        width: 150%;
                                        height: 150%
                                       
                                    }
                                </style>`
        )
    });

    LOREM_KEP.on("mouseleave", function(){
        LOREM_KEP.append(  `<style>
                                    .loremKep{
                                        width: 100%;
                                        height: 100%
                                       
                                    }
                                </style>`
        )
    });
    
}

function esemenyKezeles4() {
    const ELEM_CONTAINER = $(".elem");
    const MEGJELENITO = $(".megjelenito");
    
    ELEM_CONTAINER.eq(0).on("click", function() {
        MEGJELENITO.append(" 1");
    });

    ELEM_CONTAINER.eq(1).on("click", function() {
        MEGJELENITO.append(" 2");
    });

    ELEM_CONTAINER.eq(2).on("click", function() {
        MEGJELENITO.append(" 3");
    });

    ELEM_CONTAINER.eq(3).on("click", function() {
        MEGJELENITO.append(" 4");
    });

    ELEM_CONTAINER.eq(4).on("click", function() {
        MEGJELENITO.append(" 5");
    });
}

 

        
