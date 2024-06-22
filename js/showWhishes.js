document.addEventListener('DOMContentLoaded', function() {
    const containerWhishes = document.querySelector('.main__whishes');
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (wishlist.length === 0) {
        containerWhishes.innerHTML = '<p>No hay artículos en la lista de deseos.</p>';
    } else {
        wishlist.forEach(infoItem => {
            const div = document.createElement("div");
            div.classList.add("main__whishes--item");
            div.innerHTML = `
                
                <img class="producto-imagen" src="${infoItem.img['01']}" alt="${infoItem.nombre}">
                <div class="producto-titulo">
                    <span>${infoItem.nombre}</span>
                </div>
                <div class="producto-precio">
                    <span>Precio: $${infoItem.precio}</span>
                </div>
                <div class="producto-mem">
                    <span>Almacenamiento: ${infoItem.storage.almacenamiento} GB</span>
                </div>
                <div class="producto-ram">
                    <span>Ram: ${infoItem.storage.ram} GB</span>
                </div>
    
    
            `;
            
            containerWhishes.appendChild(div);
        });
    }
});