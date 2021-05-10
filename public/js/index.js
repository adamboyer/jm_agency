
// Add animation to services icons
let servIcons = document.querySelectorAll(".services .service-sections div");
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
  const about = document.querySelectorAll(".about");
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