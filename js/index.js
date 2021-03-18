

// Navbar animation
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = ()=> {
    if(window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if(!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(()=>{
            navbar.style.transform = 'translateY(0)';
            scrolled  = true;
        }, 200)
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
}





// function newTypeWriter(){
//     // Typewriter effect
    
//     let words = ['branding','social media presence', 'website design'];
//     let txt = 'Lorem ipsum typing effect!'; /* The text */
//     let speed = 1000; /* The speed/duration of the effect in milliseconds */
//     for(let i = 0; i < words.length; i++){
//        // console.log("herererer")
//         for(let j = 0; j<words[i].length; j++){
            
//             setTimeout(()=>{
//                 console.log("herereresdfsdfr")    
//                 document.getElementById("typewriter").innerHTML += words[i].charAt(j);
//             },speed);
//         }
//         for(let k = words[i].length; k > 0; k--){
//             setTimeout(()=>{
//                 temp = document.getElementById("typewriter").innerHTML;
//                 document.getElementById('typewriter').innerHTML =  temp.slice(0,-1);
//             }, speed);
//         }
//     }

// }



// function typeWriter() {

//    if(j < words.length) 
//         if (i < words[j].length) {
//             document.getElementById("typewriter").innerHTML += words[j].charAt(i);
//             i++;
//             setTimeout(typeWriter, speed);
//         } else {
//             let temp = '';
//             for(let n = 0; n < words[j].length; n++){
//                 console.log("here")
//                 temp = document.getElementById("typewriter").innerHTML;
                
//                 setTimeout(()=>{
//                     console.log("here dude");
//                     document.getElementById('typewriter').innerHTML =  temp.slice(0,-1);
                   
                    
//                     }, 100);
//             }
//             j ++;
//             i = 0;
//             setTimeout(typeWriter, speed);
//         }
//     else{
//         j = 0;
//         i = 0;

//     }
// }

// //typeWriter();
// newTypeWriter();

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
//console.log(servIcons);

// let i = 0;
// let j= 0;
// let reverse = false;
// let words = ['branding    ','social media presence    ', 'website design   '];
// let speed = 100; /* The speed/duration of the effect in milliseconds */
// setInterval(function(){
//     if(reverse){
//         if(j === 0){
//             reverse = false;
//             i++;
//             if(i === words.length) {
//                 i = 0;
//             }
//         } else {
//             let temp = document.getElementById("typewriter").innerHTML;
//                 document.getElementById('typewriter').innerHTML =  temp.slice(0,-1);
//                 j--;
//         }
//     } else {
//         if(j === words[i].length){
//             reverse = true;
//         } else {
//             document.getElementById("typewriter").innerHTML += words[i].charAt(j);
//             j++;
//         }
//     }
    
// },speed);