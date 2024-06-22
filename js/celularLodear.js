document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('DOMContentLoaded', function(){
        const cam = document.querySelector('.datos-cam')
        const mem = document.querySelector('.datos-mem')
        const cambtnSlider = this.document.querySelector('.cam-btnSlider')
        const membtnSlider = this.document.querySelector('.mem-btnSlider')
    


        let cont1= 0;
        let cont2= 0;
    
        cam.addEventListener('click', function(){
            cont1++
        
            if(cont1==1){
                cont1 = -1;
                const open = document.querySelector('.datos-cam-ul')
                open.classList.add('open1')
                console.log(cont1)
                cambtnSlider.innerHTML = "^";

            }
        
            if (cont1 == 0) {
                
                const openMenu = document.querySelector('.datos-cam-ul')
                
                openMenu.classList.remove('open1')
                cambtnSlider.innerHTML = "v";

                cont1 = 0
                console.log(cont1)
                
        
            }
        
            console.log(cont1)
        
        
        })

        mem.addEventListener('click', function(){
            cont2++
        
            if(cont2==1){
                cont2 = -1;
                const open = document.querySelector('.datos-mem-ul')
                open.classList.add('open3')
                console.log(cont2)
                membtnSlider.innerHTML = "^";

            }
        
            if (cont2 == 0) {
                
                const openMenu = document.querySelector('.datos-mem-ul')
                
                openMenu.classList.remove('open3')
                membtnSlider.innerHTML = "v";

                cont2 = 0
                console.log(cont2)
                
        
            }
        
            console.log(cont2)
        
        
        })
    })

    
    


    


});