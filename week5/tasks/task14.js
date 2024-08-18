// Select the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Select all input fields within the form
    const inputs = form.querySelectorAll('input');

    let allFieldsFilled = true;

    // Loop through each input field to check if it's empty
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFieldsFilled = false;
            alert('Please fill in all fields!');
            // Optionally, you can also focus on the empty field
            input.focus();
            return false;
        }
    });

    // If all fields are filled, proceed with form submission or other logic
    if (allFieldsFilled) {
        console.log('Form submitted successfully!');
        // You can now submit the form, if required, or perform other actions
        form.submit(); // Uncomment this line if you want to proceed with form submission
    }
});
