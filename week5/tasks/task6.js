// Select the starting sibling element
let sibling = document.querySelector('.siblingElementClass');

// Apply incremental styling changes while traversing through siblings
let fontSize = 12; // Starting font size

while (sibling) {
    sibling.style.fontSize = fontSize + 'px';
    fontSize += 2; // Increment font size
    sibling = sibling.nextElementSibling; // Move to the next sibling
}
