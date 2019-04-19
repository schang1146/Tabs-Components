class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = element.querySelector('.dropdown-button');
    
    // Assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent(this.content)
    });
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    // this.content.classList.toggle('dropdown-hidden');

    // Create timeline with GSAP
    if (!this.tl) {
      this.tl = new TweenMax(this.content);
      this.tl = TweenMax.to(this.content, 1, {className: "-=dropdown-hidden"});
    }
    
    // Sliding dropdown menu with GSAP
    if (this.content.classList.contains('dropdown-hidden')) {
      this.tl.play();
    } else {
      this.tl.reverse();
    }
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));