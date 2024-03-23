document.getElementById('addText').addEventListener('click', function () {
    const textElement = document.createElement('div');
    textElement.contentEditable = true;
    textElement.innerText = 'Edit me';
    textElement.style.position = 'absolute';
    textElement.style.left = '50px'; // Default position, can be changed
    textElement.style.top = '50px';  // Default position, can be changed
    document.getElementById('designArea').appendChild(textElement);

    makeElementDraggable(textElement);
});

function makeElementDraggable(element) {
    // Implement drag-and-drop functionality for the elements
    // This involves listening for mouse events and updating the element's position accordingly
}
