// Navbar animation
const navbar = document.getElementById('navbar');
const mobileNav = document.getElementById('mobile-nav');
let scrolled = false;

window.onscroll = ()=> {
    if(window.pageYOffset > 75) {
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
let currentTextColor = "#ccc", currentHBcolor="#333";


hamburger.addEventListener('click',()=>{
    if(mbNavLinks.clientHeight === 0){
        disableScrolling();
        currnSym = hamburger.className;
        hamburger.classList = "fas fa-times fa-2x";
        mbNavLinks.style.display = "flex";
        currenBg = mobileNav.style.background;
        currenHt = mobileNav.style.height;
        currentTextColor = mobileNav.style.color;
        currentHBcolor = hamburger.style.color;
        mobileNav.style.color = "#fff";
        hamburger.style.color = "#fff";
        mobileNav.style.backgroundColor = "#7512bd";
        mobileNav.style.opacity = 1;
        mobileNav.style.height = "100vh";
        
        setTimeout(()=>{
           
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
        hamburger.style.color = currentHBcolor;
        mobileNav.style.color = currentTextColor;
        mobileNav.style.opacity = 0.8;
        for(let i = 0; i < mbNavLinks.children.length; i++){
            mbNavLinks.children[i].firstElementChild.style.color = "#08333333";
        }
    }
})