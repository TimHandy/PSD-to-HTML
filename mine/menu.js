
// This was originally reliant on jquery. I changed it to vanilla JS.

var burgerNav = document.querySelector('#burger-nav')
var buttons = document.querySelectorAll('nav ul')
      
burgerNav.addEventListener('click', function() {
    buttons.forEach(function(button) {
        button.classList.toggle('open')
    })
})     


