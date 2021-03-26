

// Navbar animation
const navbar = document.getElementById('navbar');
const mobileNav = document.getElementById('mobile-nav');
let scrolled = false;

window.onscroll = ()=> {
    if(window.pageYOffset > 100) {
        navbar.classList.remove('top');
        mobileNav.classList.remove('top');
        if(!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
            mobileNav.style.transform = 'translateY(-70px)';
            
        }
        setTimeout(()=>{
            navbar.style.transform = 'translateY(0)';
            mobileNav.style.transform = 'translateY(0)';
            scrolled  = true;
        }, 200)
    } else {
        navbar.classList.add('top');
        mobileNav.classList.add('top');
        scrolled = false;
    }
}

// Add event lister and logic for collapsible mobile navigation bar

// Adding some function to disable scroll while the drop down menu is open
function disableScrolling(){
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=() => {
        if(window.pageYOffset > 100) {
            navbar.classList.remove('top');
            mobileNav.classList.remove('top');
            if(!scrolled) {
                navbar.style.transform = 'translateY(-70px)';
                mobileNav.style.transform = 'translateY(-70px)';
                
            }
            setTimeout(()=>{
                navbar.style.transform = 'translateY(0)';
                mobileNav.style.transform = 'translateY(0)';
                scrolled  = true;
            }, 200)
        } else {
            navbar.classList.add('top');
            mobileNav.classList.add('top');
            scrolled = false;
        }
    }
}
const mbNavLinks = document.getElementById("mobile-links");
const hamburger = document.getElementById("hamburger");
let currenHt = null, currnSym = null, currenBg = null;


hamburger.addEventListener('click',()=>{
    if(mbNavLinks.clientHeight === 0){
        disableScrolling();
        currnSym = hamburger.className;
        hamburger.classList = "fas fa-times fa-2x";
        mbNavLinks.style.display = "flex";
        currenBg = mobileNav.style.background;
        currenHt = mobileNav.style.height;
        mobileNav.style.backgroundColor = "#7512bd";
        mobileNav.style.opacity = 1;
        mobileNav.style.height = "100vh";
        
        setTimeout(()=>{
           console.log(mbNavLinks)
           for(let i = 0; i < mbNavLinks.children.length; i++){
               mbNavLinks.children[i].firstElementChild.style.color = "#fff";
           }
        },400);
    } else {
        enableScrolling();
        mbNavLinks.style.display = "none";
        mobileNav.style.background = currenBg;
        mobileNav.style.height = currenHt;
        hamburger.classList = currnSym;
        mobileNav.style.opacity = 0.8;
        for(let i = 0; i < mbNavLinks.children.length; i++){
            mbNavLinks.children[i].firstElementChild.style.color = "#08333333";
        }
    }
})








// Add animation to services icons
let servIcons = document.querySelectorAll("#services .row .column");
// Adding event listeners
servIcons.forEach(function(icon){
    icon.addEventListener('mouseenter',()=>{
        let ic = icon.firstElementChild;
        ic.classList.add("animate__animated");
        ic.classList.add("animate__pulse");
    })
});

servIcons.forEach(function(icon){
    icon.addEventListener('mouseleave',()=>{
        let ic = icon.firstElementChild;
        ic.classList.remove("animate__animated");
        ic.classList.remove("animate__pulse");
    })
}); 

// // Add about animation
// let scrollpos = window.scrollY; // window scroll position
// let wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
// let element = document.querySelector("#about"); //element

// window.addEventListener('scroll', function(){ 
//     if(scrollpos > (element.offsetTop - wh)){
//         console.log("here dude");
//         element.classList.add("animate__animated");
//         element.classList.add("animate__heartBeat");
//     } else {
//         console.log("Im here");
//         element.classList.remove("animate__animated");
//         element.classList.remove("animate__heartBeat");
//     }
// });

let scrollpos = window.scrollY
  const about = document.querySelectorAll("#about");
  const el_to_effect = document.querySelectorAll('.heart_beat');
  
  const elementHeight = about[0].offsetHeight + 500;

  const add_class_on_scroll = () => {
      
      for(let i = 0; i < el_to_effect.length; i++){
          
            
            el_to_effect[i].classList.add("animate__animated");
            el_to_effect[i].classList.add("animate__heartBeat");
            
            
          
      }
      
    }
  const remove_class_on_scroll = () => {
      
    for(let i = 0; i < el_to_effect.length; i++){
        el_to_effect[i].classList.remove("animate__animated");
        el_to_effect[i].classList.remove("animate__heartBeat");
        
    }
    }

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= elementHeight) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    
  })