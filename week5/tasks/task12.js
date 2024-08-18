// Select the <div> element you want to clone
const divToClone = document.querySelector('.divToClone');

// Clone the <div> element, including its child elements
const clonedDiv = divToClone.cloneNode(true);

// Select the part of the document where you want to append the cloned <div>
const targetElement = document.querySelector('.targetElement');

// Append the cloned <div> to the target element
targetElement.appendChild(clonedDiv);
