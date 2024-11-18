/* Single Element Selector */
export default {
    $: (selector) => {
        try {
            return document.querySelector(selector);
        }
        catch (err) {
            console.log(err);
        }
    },
    $$: (selector) => {
        try {
            return document.querySelectorAll(selector);
        }
        catch (err) {
            console.log(err);
        }

    },
    addEventListeners: (element, events, handler) => {
        try {
            events.split(' ').forEach(event => element.addEventListener(event, handler));
        }
        catch (err) {
            console.log(err);
        }

    },
    makeDraggable: (element) => {
        try {
            element.setAttribute('draggable', true);
        }
        catch (err) {
            console.log(err);
        }
    },
    handleDragStart: (event) => {
        try {
            event.dataTransfer.setData('text/plain', event.target.id);
        }
        catch (err) {
            console.log(err);
        }
    },
    handleDragOver: (event) => {
        try {
            event.preventDefault();
        }
        catch (err) {
            console.log(err);
        }

    },
    handleDrop: (event, dropTarget) => {

        try {
            const id = event.dataTransfer.getData('text/plain');
            const draggedElement = document.getElementById(id);
            dropTarget.appendChild(draggedElement);
        }
        catch (err) {
            console.log(err);
        }
    }
}