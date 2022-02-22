var bntMobile = document.querySelector('#bnt-mobile')
bntMobile.addEventListener('click', toggleMenu)

    function toggleMenu() {
        var nav = document.querySelector('.nav')
        nav.classList.toggle('active')
    }