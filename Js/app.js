let nav = document.querySelector('nav')
let descriptionItem = document.querySelectorAll('.description-item')
let freeCourses = document.querySelector('.header-free-courses')
let coursesSale = document.querySelectorAll('.courses-sale-block')
let priz = document.querySelector('.free-courses-img')
let masters = document.querySelector('.nav-brand a')
let anchors = document.querySelectorAll('.nav-ul li a')

const anchorsLink = document.querySelectorAll('a[href*="#"]')



for(let anchorLink of anchorsLink){
    anchorLink.addEventListener('click', (e) =>{
        e.preventDefault()
        const blockId = anchorLink.getAttribute('href')
       
        console.log(blockId);
        document.querySelector(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


window.addEventListener('scroll', () =>{
    if(scrollY > 760){
        nav.style.position = 'fixed'
        nav.style.background = '#81e0fd'
        masters.style.color = '#7ba6b6c2'
        anchors.addEventListener('mouseover', () =>{
            anchors.style.borderBottom = '2px solid #0a21ed'
        })
    }else{
        nav.style.position = 'relative'
        nav.style.background = 'none'
    }
    if(scrollY === 0){
        freeCourses.classList.add('header-courses-free')
    }
    if(scrollY > 500){
        descriptionItem.forEach(item =>{
            item.style.opacity = 1
        })
    }
    if(scrollY > 1800){
        coursesSale[0].style.transform = 'translateX(0)'
        coursesSale[0].style.transition = 'all .8s'
        coursesSale[0].style.opacity = 1
    }
    if(scrollY > 2300){
        coursesSale[1].style.transform = 'translateX(0)'
        coursesSale[1].style.transition = 'all .8s'
        coursesSale[1].style.opacity = 1
    }
    if(scrollY > 3200){
        coursesSale[2].style.transform = 'translateX(0)'
        coursesSale[2].style.transition = 'all .8s'
        coursesSale[2].style.opacity = 1
    }
    if(scrollY > 3800){
        coursesSale[3].style.transform = 'translateX(0)'
        coursesSale[3].style.transition = 'all .8s'
        coursesSale[3].style.opacity = 1
    }
    if(scrollY > 4500){
        coursesSale[4].style.transform = 'translateX(0)'
        coursesSale[4].style.transition = 'all .8s'
        coursesSale[4].style.opacity = 1
    }
    if(scrollY > 5500){
        priz.style.transform = "translateY(0)"
        priz.style.transition = "all .8s"
        priz.style.opacity = 1
    }
    
})
