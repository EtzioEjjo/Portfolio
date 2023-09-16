
const nav_toggle=document.querySelector('.nav__toggle'),
      nav_menu=document.querySelector('.nav__menu'),
      nav_close =document.querySelector('.nav__close')
    



/*======  SHOW MENU  ======*/
if(nav_toggle){
    nav_toggle.addEventListener('click',(e)=>{
        nav_menu.classList.add('show-menu')
    
    
    })

}

/*======   HIDE MENU   ======= */
if(nav_close){
    nav_close.addEventListener('click',(e)=>{
 
        nav_menu.classList.remove('show-menu');
    
    
    })
  

}

/*======   make the menu disappear when we click on a link  ======= */
nav_link=document.querySelectorAll('.nav__link')

const linkAction=()=>{

   nav_menu.classList.remove('show-menu');

}
nav_link.forEach(n=>n.addEventListener('click',linkAction));



/*======   adding a  box-shadow to the header when scrolling down  ======= */


const header=document.getElementById('header');

// header.classList.add('shadow-header')

window.addEventListener('scroll',(e)=>{
    scrollY>50?header.classList.add('shadow-header'):
                header.classList.remove('shadow-header')
    
    // header.classList.remove('shadow-header')

})


function showScrollUp(){
    const scrollup=document.getElementById('scrollup');

    if(scrollup){
    scrollY>=350?
        scrollup.classList.add('show-scrollup'):
        scrollup.classList.remove('show-scrollup')
    }
    
}

window.addEventListener('scroll',showScrollUp)



const activeSection=()=>{
    const sections=document.getElementsByClassName('section')

    for(let sec of sections){
        
        const sectionHieght=sec.offsetHeight,
              sectionTop=sec.offsetTop-58,
              sectionId=sec.getAttribute('id')
              sectionClass=document.querySelector('.nav__menu a[href='+sectionId+']')


              if(scrollY>sectionTop&&scrollY<=sectionTop+sectionHieght){
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }

    }
    

}

window.addEventListener('scroll',activeSection)
/*================= DARK LIGHT THEME================== */
const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme =()=>document.body.classList.contains(darkTheme)?'dark':':light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-moon-line'

if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedIcon=== ri=='ri-moon-line' ?'add':'remove'](iconTheme)

}

themeButton.addEventListener('click',()=>{

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})


