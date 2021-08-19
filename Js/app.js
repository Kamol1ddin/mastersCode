let nav = document.querySelector('nav')

window.addEventListener('scroll', () =>{
    if(scrollY === 560){
        nav.style.position = 'fixed'
        nav.style.background = '#81e0fd'
    }
})