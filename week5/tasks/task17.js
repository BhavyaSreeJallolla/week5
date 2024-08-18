// Select all input fields within the form
const inputFields = document.querySelectorAll('input');

// Loop through each input field to add event listeners
inputFields.forEach(input => {
    // Add a focus event listener
    input.addEventListener('focus', () => {
        input.style.backgroundColor = 'lightyellow'; // Highlight the field
    });

    // Add a blur event listener
    input.addEventListener('blur', () => {
        input.style.backgroundColor = ''; // Remove the highlight
    });
});
