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
    const ELEM = document.querySelectorAll("section h2")[0];
    console.log(ELEM.innerHTML);
}
function elemekElerese2() {
    const ELEM = document.getElementById("ide");
    ELEM.innerHTML += ("<p>Jo reggelt!</p>");
}
function elemekElerese3() {
    const ELEM = document.querySelector(".ide");
    ELEM.innerHTML += ("<p>Jo reggelt!</p>");
}

function elemekElerese4() {
    const LISTA_ELEMENT = document.querySelector(".lista");
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
   LISTA_ELEMENT.innerHTML += listaMegjelenitesFelsorolasban;

   return  listaMegjelenitesFelsorolasban;

   
}

function elemekFormazasa1(){
    const SECTION_LISTA_CLASS = document.querySelector("section .lista");
    SECTION_LISTA_CLASS.classList.add("formazott");
}

function esemenyKezeles1(){
    const SECTION_LISTA_CLASS = document.querySelector("section .lista");
    const KATTINTAS_UTAN = document.querySelector(".kattintasutan");
    SECTION_LISTA_CLASS.addEventListener("click", function(){
            KATTINTAS_UTAN.innerHTML += elemekElerese4();
           
    });
    
}
function esemenyKezeles2(){
    const FELADAT = document.querySelector(".feladat");
    FELADAT.innerHTML += `<button class="okBtn">OK</button>`;
    FELADAT.addEventListener("click",function(){
        FELADAT.innerHTML += `<img src="549-536x354.jpg" alt="loremPicsum" class="loremKep">`
    });
}
 
function esemenyKezeles3(){
    const LOREM_KEP =  document.querySelector(".feladat");
    LOREM_KEP.addEventListener("mouseenter", function(){
        LOREM_KEP.innerHTML += `<style>
                                    .loremKep{
                                        width: 150%;
                                        height: 150%
                                       
                                    }
                                </style>`
    });

    LOREM_KEP.addEventListener("mouseleave", function(){
        LOREM_KEP.innerHTML += `<style>
                                    .loremKep{
                                        width: 100%;
                                        height: 100%
                                       
                                    }
                                </style>`
    });
    
}

function esemenyKezeles4(){
    const ELEM_CONTAINER = document.querySelectorAll(".elem");
    const MEGJELENITO = document.querySelector(".megjelenito")
    ELEM_CONTAINER[0].addEventListener("click",function(){
        MEGJELENITO.innerHTML += " 1"
    }); 
    ELEM_CONTAINER[1].addEventListener("click",function(){
        MEGJELENITO.innerHTML += " 2"
    }); 
    ELEM_CONTAINER[2].addEventListener("click",function(){
        MEGJELENITO.innerHTML += " 3"
    }); 
    ELEM_CONTAINER[3].addEventListener("click",function(){
        MEGJELENITO.innerHTML += " 4"
    }); 
    ELEM_CONTAINER[4].addEventListener("click",function(){
        MEGJELENITO.innerHTML += " 5"
    }); 
    
}
 

        
