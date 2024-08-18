// Select all <li> elements within a <ul>
const listItems = document.querySelectorAll('ul li');

// Log the text content of each <li> element
listItems.forEach(li => {
    console.log(li.textContent);
});
