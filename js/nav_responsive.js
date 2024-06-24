const bar = document.querySelector('.nav__menu')

let cont = 0;

bar.addEventListener('click', function(){
    

    cont++


    if (cont == 1) {
        cont = -1;
        const open = document.querySelector('.header__nav--inf')
        open.classList.add('open')
        console.log(cont)

    }
    

    if (cont == 0) {
        const openMenu = document.querySelector('.header__nav--inf')
        
        openMenu.classList.remove('open')
        const openClose = document.querySelector('.header__nav--inf')

        cont = 0
        console.log(cont)
        

    }

    console.log(cont)

    
})
