import { celulares } from './celulares.js';
document.addEventListener("DOMContentLoaded", function() {
    const containerRecommend = document.querySelector('.main__recommend--items');
    const containerRandom = document.querySelector('.main__random--items');

    let a = 0;
    let number = [];

  
    celulares.forEach(infoItem => {
        const div = document.createElement("div");
        div.classList.add("main__recommend--item");
        div.classList.add(`item-${a}`)
        div.innerHTML = `
            <img class="producto-imagen cel" src="${infoItem.img['01']}" alt="${infoItem.nombre}">
            <div class="producto-titulo cel">
                <span>${infoItem.nombre}</span>
            </div>
            <div class="producto-precio cel">
                <span>Precio: $${infoItem.precio}</span>
            </div>

            <a class="producto-boton cel" id="${infoItem.id}" href="celular.html">Ver</a>

        `;
        a++;


        containerRecommend.appendChild(div);

    });


    console.log(a)
    for(let i = 0; i < celulares.length; i++){
        number[i] = i;

    }
    console.log(number)


    number.sort(function() { 
        return Math.random() - 0.5 
    });
    console.log(number)
    a = 0;



    for(let i=0; i < celulares.length ; i++){
    
        const div = document.createElement("div");

        let infoItem = celulares[number[i]];


        
        div.classList.add("main__random--item");
        div.classList.add(`item-${a}`)
        div.innerHTML = `
            <img class="producto-imagen" src="${infoItem.img['01']}" alt="${infoItem.nombre}">
            <div class="producto-titulo cel">
                <span>${infoItem.nombre}</span>
            </div>
            <div class="producto-precio cel">
                <span>Precio: $${infoItem.precio}</span>
            </div>

            <a class="producto-boton cel" id="${infoItem.id}" href="celular.html">Ver</a>

        `;
        a++;

        containerRandom.appendChild(div);

    }


    const productoBoton = document.querySelectorAll('.producto-boton');
    productoBoton.forEach(button => {
        button.addEventListener('click', function() {
            const btnid = this.getAttribute('id');
            localStorage.setItem('selectedBtnId', btnid);
            window.location.href = 'celular.html';
        });
    });



    
});



