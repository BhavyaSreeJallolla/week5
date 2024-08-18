// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Contact form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('All fields are required.');
            event.preventDefault(); // Prevent form submission
        } else {
            alert('Thank you for your message!');
        }
    });
});
