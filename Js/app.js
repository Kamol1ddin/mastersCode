let nav = document.querySelector('nav')
let freeCourses = document.querySelector('.header-free-courses')
let coursesSale = document.querySelector('.courses-sale-block')

window.addEventListener('scroll', () =>{
    // if(scrollY === 760){
    //     nav.style.position = 'fixed'
    //     nav.style.background = '#81e0fd'
    // }
    if(scrollY === 0){
        freeCourses.classList.add('header-courses-free')
    }
    if(scrollY === 2000){
        coursesSale[0].style.transform = 'translateX(0)'
        coursesSale[0].style.transition = 'all .5s'
    }
    if(scrollY === 2800){
        coursesSale[1].style.transform = 'translateX(0)'
        coursesSale[1].style.transition = 'all .5s'
    }
    if(scrollY === 3500){
        coursesSale[2].style.transform = 'translateX(0)'
        coursesSale[2].style.transition = 'all .5s'
    }
    if(scrollY === 4000){
        coursesSale[3].style.transform = 'translateX(0)'
        coursesSale[3].style.transition = 'all .5s'
    }
    if(scrollY === 4700){
        coursesSale[4].style.transform = 'translateX(0)'
        coursesSale[4].style.transition = 'all .5s'
    }
    console.log(scrollY);
})
