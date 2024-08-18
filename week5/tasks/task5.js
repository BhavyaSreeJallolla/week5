// Select the parent <div> element
const parentDiv = document.querySelector('.parentDivClass');

// Find the first and last child elements
const firstChild = parentDiv.firstElementChild;
const lastChild = parentDiv.lastElementChild;

// Apply different styles
firstChild.style.color = 'blue';
lastChild.style.color = 'green';
