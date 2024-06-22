window.addEventListener("load", function(){
    this.document.getElementById("loader").classList.toggle("loader2")
    const perfil = document.querySelector('.perfil__logo-img')
    const selector = this.document.querySelector('main__celular--item')
    const body = document.documentElement

    let cont = 0

    perfil.addEventListener('click', function(){
    
        cont++
        if(cont==1){
            cont = -1;
            const open = document.querySelector('.perfil__logo-botones')
            open.classList.add('open')
            console.log(cont)
        }
    


        if (cont == 0) {
            
            const openMenu = document.querySelector('.perfil__logo-botones')
            openMenu.classList.remove('open')
    
            cont = 0
            console.log(cont)
            
    
        }
    
        console.log(cont)
        
    })

    body.addEventListener('click', function(){
        if (cont == -1){

            cont ++
            if (cont == 0) {
            
                const openMenu = document.querySelector('.perfil__logo-botones')
                
                openMenu.classList.remove('open')
        
                cont = 0
                console.log(cont)
                
        
            }
        }

        console.log(cont)
    })




    perfil.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el clic en este div se propague al main
    });

    selector.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el clic en este div se propague al main
    });

})







