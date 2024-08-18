// Select the button element
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Toggle the background color between two colors
    if (button.style.backgroundColor === 'blue') {
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'blue';
    }
});
