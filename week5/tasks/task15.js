// Select the <div> element
const divElement = document.querySelector('.track-mouse');

// Add a mousemove event listener to the <div>
divElement.addEventListener('mousemove', (event) => {
    // Get the mouse coordinates relative to the <div>
    const x = event.clientX - divElement.getBoundingClientRect().left;
    const y = event.clientY - divElement.getBoundingClientRect().top;

    // Update the coordinates display (you can display it anywhere on the screen)
    const coordinatesDisplay = document.querySelector('.coordinates');
    coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
});
