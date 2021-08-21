let nav = document.querySelector('nav')
let descriptionItem = document.querySelectorAll('.description-item')
let freeCourses = document.querySelector('.header-free-courses')
let coursesSale = document.querySelectorAll('.courses-sale-block')
let priz = document.querySelector('.free-courses-img')

window.addEventListener('scroll', () =>{
    // if(scrollY === 760){
    //     nav.style.position = 'fixed'
    //     nav.style.background = '#81e0fd'
    // }
    if(scrollY === 0){
        freeCourses.classList.add('header-courses-free')
    }
    if(scrollY === 500){
        descriptionItem.style.opacity = 1
    }
    if(scrollY === 1800){
        coursesSale[0].style.transform = 'translateX(0)'
        coursesSale[0].style.transition = 'all .8s'
        coursesSale[0].style.opacity = 1
    }
    if(scrollY === 2300){
        coursesSale[1].style.transform = 'translateX(0)'
        coursesSale[1].style.transition = 'all .8s'
        coursesSale[1].style.opacity = 1
    }
    if(scrollY === 3300){
        coursesSale[2].style.transform = 'translateX(0)'
        coursesSale[2].style.transition = 'all .8s'
        coursesSale[2].style.opacity = 1
    }
    if(scrollY === 4100){
        coursesSale[3].style.transform = 'translateX(0)'
        coursesSale[3].style.transition = 'all .8s'
        coursesSale[3].style.opacity = 1
    }
    if(scrollY === 4600){
        coursesSale[4].style.transform = 'translateX(0)'
        coursesSale[4].style.transition = 'all .8s'
        coursesSale[4].style.opacity = 1
    }
    if(scrollY === 5500){
        priz.style.transform = "translateY(0)"
        priz.style.transition = "all .8s"
        priz.style.opacity = 1
    }
    console.log(scrollY);
})
