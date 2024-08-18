// Select the existing <ul> element
const ulElement = document.querySelector('ul');

// Create a new <li> element
const newLi = document.createElement('li');

// Add text content to the new <li> element
newLi.textContent = 'New List Item';

// Append the new <li> element to the <ul>
ulElement.appendChild(newLi);
