const TypeWriter = function(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;

}
// Type method
TypeWriter.prototype.type = function(){
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fulltxt = this.words[current];
    // Check if deleting
    if(this.isDeleting){
        // Remove char
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
        // Add char
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="text-secondary txt">${this.txt}</span>`;

    // Type speed
    let typeSpeed = 150;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }
    // if word is complete
    if(!this.isDeleting && this.txt === fulltxt){
        // make a pause at the end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        // move to the next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(()=> this.type(), typeSpeed);
}
// Init on DOM Load

document.addEventListener('DOMContentLoaded', init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}