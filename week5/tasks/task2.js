// Select all elements with the class name
const elements = document.querySelectorAll('.yourClassName');

// Toggle a class on each of them
elements.forEach(el => {
    el.classList.toggle('anotherClass');
});
