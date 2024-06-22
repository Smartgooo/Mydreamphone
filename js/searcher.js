import { celulares } from './celulares.js';

document.addEventListener('DOMContentLoaded', function(){

    const divStorage = document.getElementById('ops-mem')
    const divRam = document.getElementById('ops-ram')
    const divMarca = document.getElementById('ops-marca')
    const doubleRange = document.querySelector('.double-range-slider')
    const containerRecommend = document.querySelector('.searcher__output--contenedor')

    let precios = []
    let i = 0;
    celulares.forEach(celular => {
        precios[i] = parseFloat(celular.precio)
        i++
    });
    console.log(precios)

    console.log(precios)

    

    agregarOption(fillArray('storage.almacenamiento'),divStorage,"GB")
    agregarOption(fillArray('storage.ram'),divRam, "GB")
    agregarOption(fillArray('marca'),divMarca,"")




    const storage = document.getElementById('ops-mem')
    const ram = document.getElementById('ops-ram')
    const camMAIN = document.getElementById('ops-camMAIN');
    const camFRON = document.getElementById('ops-camFRON');
    const marca = document.getElementById('ops-marca');

    const btnBuscar = document.querySelector('.searcher__input--send');



    const rangeMinP = document.getElementById('rangeMinP');
    const rangeMaxP = document.getElementById('rangeMaxP');
    rangeMinP.addEventListener('input', () => updateRangeValues('rangeMinP', 'rangeMaxP', 'rangeMinValueP', 'rangeMaxValueP',300));
    rangeMaxP.addEventListener('input', () => updateRangeValues('rangeMinP', 'rangeMaxP', 'rangeMinValueP', 'rangeMaxValueP',300));

    // Configurar sliders de cámara
    const rangeMinC = document.getElementById('rangeMinC');
    const rangeMaxC = document.getElementById('rangeMaxC');
    rangeMinC.addEventListener('input', () => updateRangeValues('rangeMinC', 'rangeMaxC', 'rangeMinValueC', 'rangeMaxValueC',10));
    rangeMaxC.addEventListener('input', () => updateRangeValues('rangeMinC', 'rangeMaxC', 'rangeMinValueC', 'rangeMaxValueC',10));

    updateRangeValues('rangeMinP', 'rangeMaxP', 'rangeMinValueP', 'rangeMaxValueP');
    updateRangeValues('rangeMinC', 'rangeMaxC', 'rangeMinValueC', 'rangeMaxValueC');

    function updateRangeValues(minId, maxId, minValueId, maxValueId, gap) {
        const rangeMin = document.getElementById(minId);
        const rangeMax = document.getElementById(maxId);
        const minVal = parseInt(rangeMin.value);
        const maxVal = parseInt(rangeMax.value);
        const rangeMinValue = document.getElementById(minValueId);
        const rangeMaxValue = document.getElementById(maxValueId);

        if (minVal > maxVal - gap) {
            rangeMax.value = minVal + gap;
        } else if (maxVal < minVal + gap) {
            rangeMin.value = maxVal - gap;
        }

        rangeMinValue.textContent = rangeMin.value;
        rangeMaxValue.textContent = rangeMax.value;
    }


    

    const rangeInputHeight = rangeMinP.getBoundingClientRect().height +4;
    doubleRange.style.height = `${rangeInputHeight}px`;

    btnBuscar.addEventListener('click', function(){
        containerRecommend.innerHTML =""
        let probs = []
        let u = 0


        const minValP = parseInt(rangeMinP.value);
        const maxValP = parseInt(rangeMaxP.value);
        const minValC = parseInt(rangeMinC.value);
        const maxValC = parseInt(rangeMaxC.value);
        const storageVal = (storage.value)
        const ramVal = (ram.value)

        const marcaVal = marca.value

        const datos = {
            minimo: minValP,
            maximo: maxValP,
            storage: storageVal,
            ram: ramVal,
            marca: marcaVal,


        };



        if(!(marcaVal=="Elige una opcion")){
            let cantP=0;
            celulares.forEach(celular => {
                if(celular.marca==datos.marca){
                    probs[u] = celular
                    u++
                }
            })

            u=0

            probs.forEach(prob=>{
                if(prob.precio >= minValP && prob.precio <= maxValP){
                    probs[u] = prob
                    u++
                    cantP++

                }
            })
            probs.splice(u,probs.length-u)
            console.log(probs)

            if(cantP==0){
                console.log("No se encontraron celulares :(")
            }
            else{
                if (!(storageVal == "Elige una opcion")) {
                    cantP=0
                    u = 0;
                    probs.forEach(celular =>{
                        if(parseInt(celular.storage.almacenamiento) == parseInt(storageVal)){
                            probs[u] = celular
                            u++
                            cantP++;
                        }
                        
                    })

                    probs.splice(u,probs.length-u)
                    console.log(probs)
                    if(cantP == 0){
                        console.log("No se encontraron celulares :(")

                    }
                    else{
                        if(!(ramVal== "Elige una opcion")){
                            cantP=0
                            u = 0;
                            probs.forEach(prob =>{
                                if(parseInt(prob.storage.ram)==parseInt(ramVal)){
                                    probs[u] = prob
                                    u++
                                    cantP++
                                }
                            })
                            probs.splice(u,probs.length-u)
                            console.log(probs)
                            if(cantP == 0){
                                console.log("No se encontraron celulares :(")

                            }
                            else{
                                cantP=0
                                u = 0;
                                probs.forEach(prob=>{
                                    if(prob.cam.trasera >= minValC && prob.cam.trasera <= maxValC){
                                        probs[u] = prob
                                        u++
                                        cantP++
                    
                                    }
                                })
                                probs.splice(u,probs.length-u)
                                console.log(probs)

                            }
                        }
                    }
        
                }else{
                    if(!(ramVal== "Elige una opcion")){
                        cantP=0
                        u = 0;
                        probs.forEach(prob =>{
                            if(parseInt(prob.storage.ram)==parseInt(ramVal)){
                                probs[u] = prob
                                u++
                                cantP++
                            }
                        })
                        probs.splice(u,probs.length-u)

                        console.log(probs)
                        if(cantP == 0){
                            console.log("No se encontraron celulares :(")

                        }
                        else{
                            cantP=0
                            u = 0;
                            probs.forEach(prob=>{
                                if(prob.cam.trasera >= minValC && prob.cam.trasera <= maxValC){
                                    probs[u] = prob
                                    u++
                                    cantP++
                    
                                }
                            })
                            probs.splice(u,probs.length-u)
                            console.log(probs)
                            console.log("HAY "+cantP)

                        }
                    }
                                          
                }
            }

        
        }
        else{
            u=0
            let cantP= 0;
            celulares.forEach(celular=>{
                if(celular.precio >= minValP && celular.precio <= maxValP){
                    probs[u] = celular
                    u++
                    cantP++;
                }
            })

            if(cantP==0){
                console.log("No se encontraron celulares :(")
            }
            else{
                if (!(storageVal == "Elige una opcion")) {
                    cantP=0
                    u = 0;
                    probs.forEach(celular =>{
                        if(parseInt(celular.storage.almacenamiento) == parseInt(storageVal)){
                            probs[u] = celular
                            u++
                            cantP++;
                        }
                        
                    })

                    probs.splice(u,probs.length-u)
                    console.log(probs)
                    if(cantP == 0){
                        console.log("No se encontraron celulares :(")

                    }
                    else {
                        if(!(ramVal== "Elige una opcion")){
                            cantP=0
                            u = 0;
                            probs.forEach(prob =>{
                                if(parseInt(prob.storage.ram)==parseInt(ramVal)){
                                    probs[u] = prob
                                    u++
                                    cantP++
                                }
                            })
                            probs.splice(u,probs.length-u)

                            console.log(probs)
                            if(cantP == 0){
                                console.log("No se encontraron celulares :(")

                            }
                            else{
                                cantP=0
                                u = 0;
                                probs.forEach(prob=>{
                                    if(prob.cam.trasera >= minValC && prob.cam.trasera <= maxValC){
                                        probs[u] = prob
                                        u++
                                        cantP++
                    
                                    }
                                })
                                probs.splice(u,probs.length-u)
                                console.log(probs)
                            }
                        }
                    }
                    
        
                }else{
                    if(!(ramVal== "Elige una opcion")){
                        cantP=0
                        u = 0;
                        probs.forEach(prob =>{
                            if(parseInt(prob.storage.ram)==parseInt(ramVal)){
                                probs[u] = prob
                                u++
                                cantP++
                            }
                        })
                        probs.splice(u,probs.length-u)

                        console.log(probs)
                        if(cantP == 0){
                            console.log("No se encontraron celulares :(")

                        }
                        else{
                            cantP=0
                            u = 0;
                            probs.forEach(prob=>{
                                if(prob.cam.trasera >= minValC && prob.cam.trasera <= maxValC){
                                    probs[u] = prob
                                    u++
                                    cantP++
                
                                }
                            })
                            probs.splice(u,probs.length-u)
                            console.log(probs)
                            console.log("HAY "+cantP)

                        }
                    }else{
                        console.log("NO SE EJECUTA")
                    }
                    console.log(probs)
                   
                }
                
            }

            
        }
        

        let a = 0;
        probs.forEach(infoItem => {
            const div = document.createElement("div");
            div.classList.add("main__recommend--item");
            div.classList.add(`item-${a}`)
            div.innerHTML = `
                <img class="producto-imagen" src="${infoItem.img['01']}" alt="${infoItem.nombre}">
                <div class="producto-titulo">
                    <span>${infoItem.nombre}</span>
                </div>
                <div class="producto-precio">
                    <span>Precio: $${infoItem.precio}</span>
                </div>
                <div class="producto-gb">
                    <span>Almacenamiento: ${infoItem.storage.almacenamiento} GB</span>
                </div>
                <div class="producto-ram">
                    <span>Ram: ${infoItem.storage.ram} GB</span>
                </div>

                <a class="producto-boton" id="${infoItem.id}" href="celular.html">Ver</a>

            `;
            a++;


            containerRecommend.appendChild(div);

    });
        
    const productoBoton = document.querySelectorAll('.producto-boton');
    productoBoton.forEach(button => {
        button.addEventListener('click', function() {
            const btnid = this.getAttribute('id');
            localStorage.setItem('selectedBtnId', btnid);
            window.alert(btnid)
            window.location.href = 'celular.html';
        });
    });
    

    });

    
    
    
    


})


function agregarOption(datos, div, uni){
    datos.forEach(dato =>{
        const option = document.createElement(`option`);
            option.innerHTML = `
                 ${dato} ${uni}

            `;
            div.append(option);
    })
}

function fillArray(atributo){
    let datos =[]
    let i = 0;


    celulares.forEach(celular =>{

        let partes = atributo.split('.');
        let data = partes.reduce((obj, key) => obj && obj[key], celular);
        if (datos.includes(data)){

        }
        else{
            datos[i] = data
            datos = datos.sort((a,b)=>a-b)
            i++
        }
        
    })
    return datos
}