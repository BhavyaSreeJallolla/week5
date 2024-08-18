// Add a DOMContentLoaded event listener to the document
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content fully loaded and parsed!');
    // You can also display this message on the webpage if needed
    const messageElement = document.createElement('div');
    messageElement.textContent = 'DOM content fully loaded!';
    document.body.appendChild(messageElement);
});
