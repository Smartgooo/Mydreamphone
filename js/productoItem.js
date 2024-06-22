import { celulares } from './celulares.js';
window.addEventListener('DOMContentLoaded', function(){
    this.document.getElementById("loader").classList.toggle("loader2")
        
        const containerCelular = document.querySelector('.main__celular')
        let a = 0;

         
        const selectedBtnId = localStorage.getItem('selectedBtnId');
        
        console.log(selectedBtnId)
        console.log("------------------------")
    
        celulares.forEach(celularItem =>{
            console.log(celularItem.id)
            if((celularItem.id) == selectedBtnId){
                console.log(parseInt(selectedBtnId))
    
                const div = document.createElement("div");
            
                div.classList.add("main__celular--item");
                div.innerHTML = `
            
                    <div class="celular__img">
                        <div class="celular__slider">
                            <img class="celular__slider--img main_image" src="${celularItem.img['01']}" alt="${celularItem.nombre}">
                        </div>
                            <div class="celular__button">
                                <img id="item-01" class="thumbnail active" src="${celularItem.img['01']}">
                                <img id="item-02"class="thumbnail" src="${celularItem.img['02']}">
                                <img id="item-03"class="thumbnail" src="${celularItem.img['03']}">
                                <img id="item-04"class="thumbnail" src="${celularItem.img['04']}">
                            </div>     
                    </div>
            
            
                    <div class="celular__info">
                        <div class="celular__info--title">
                            <span class="celular__marca">${celularItem.marca.toUpperCase()}</span>
                        </div>
                        <div class="celular__info--datos">
                            <div class="datos-nombre">
                                <span>${celularItem.nombre}</span>
                            </div>
                            <div class="datos-precio">
                                <span>Precio:</span>
                                <span precio_dolares">${celularItem.precio}</span>
                            </div>
                            <div class="datos-serie">
                                <span>Serie:</span>
                                <span precio_dolares">${celularItem.serie.charAt(0).toUpperCase() + celularItem.serie.slice(1)}</span>
                            </div>
            
                            <div class="datos-tecnologia">
                                <span>Tecnologia:</span>
                                <span precio_dolares">${celularItem.tec}G</span>
                            </div>
                            <div class="datos-procesador">
                                <span>Procesador:</span>
                                <span precio_dolares">${(celularItem.procesador.nombre).charAt(0).toUpperCase() + (celularItem.procesador.nombre).slice(1)}</span>
                            </div>
            
                            <div class="datos-bateria">
                                <span>Bateria:</span>
                                <span class="precio_dolares">$${celularItem.bateria}</span>
                            </div>
            
                            <div class="datos-cam">
                                <div class="datos-cam-btn">
                                    <span>Camara</span>
                                    <div class="cam-btnSlider">v</div>    
                                </div>
                                <ul class="datos-cam-ul">
                                    <li class="first-li">${celularItem.cam.frontal}MP Frontal</li>
                                    <li>${celularItem.cam.trasera}MP Principal</li>
            
                                </ul>
                                
                            </div>
            
                            <div class="datos-mem">
                                <div class="datos-mem-btn">
                                    <span>Memoria</span>
                                    <div class="mem-btnSlider">v</div>    
                                </div>
                                <ul class="datos-mem-ul">
                                    <li class="first-li">${celularItem.storage.almacenamiento}GB</li>
                                    <li>${celularItem.storage.ram}GB Ram</li>
            
                                </ul>
                                
                            </div>
                            
                        </div>
            
                        <div class="celular__btns">
                        <a target="_blank" href="${celularItem.link}">Ver Modelo</a>
                        <button class="wishlist-btn">Agregar a Lista de Deseos </button>
            
                        </div>
                    </div>
            
                `;
            
                containerCelular.appendChild(div);  
                const main_img = document.querySelector('.main_image')
                const thumbnails = document.querySelectorAll('.thumbnail')
                thumbnails.forEach(thumb => {
                    thumb.addEventListener('click', function(){
                        const active = document.querySelector('.active')
                        active.classList.remove('active')
                        thumb.classList.add('active')
                        main_img.src = thumb.src
                
                        console.log(main_img)
                        
                    })
                })
                const wishlistBtn = div.querySelector('.wishlist-btn');
                wishlistBtn.addEventListener('click', function() {
                    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
                    
                    const isAlreadyInWishlist = wishlist.some(item => item.id === celularItem.id);
                    
                    if (!isAlreadyInWishlist) {
                        wishlist.push(celularItem);
                        
                        localStorage.setItem('wishlist', JSON.stringify(wishlist));
                        
                        alert('Celular añadido a la lista de deseos');
                    } else {
                        alert('El celular ya está en la lista de deseos');
                    }
                });
            }
            
        })

       
     
        
    
       
    
});
    
