export default {
    $: (selector) => {
        try {
            /* Single Element Selector */
            return document.querySelector(selector);
        } catch (err) { console.log(err); }
    },
    $$: (selector) => {
        try {
            /* Multiple Element Selector */
            return document.querySelectorAll(selector);
        } catch (err) { console.log(err); }
    },
    makeDraggable: (element) => {
        try {
            element.setAttribute('draggable', true);
        }
        catch (err) { console.log(err); }
    },
    handleDragStart: (event) => {
        try {
            /* Drag Element Start Event */
            if (!event.target.id) throw new Error("Invalid Element, missing ID");
            event.dataTransfer.setData("text/plain", event.target.id);
        } catch (err) { console.log(err); }

    },
    handleDragOver: (event) => {
        /**
         by default browser dragover default behaviour not 
         allowed to drop elements because of unintended
         so we need to prevent the default behavior 
         */
        event.preventDefault();
    },
    handleDrop: (event, dropTarget) => {
        try {
            const id = event.dataTransfer.getData('text/plain');
            console.log(id);
            const draggedElement = document.getElementById(id);

            dropTarget.appendChild(draggedElement);
        } catch (err) { console.log(err); }
    },
    addConnectionHandler: (nodeElement, onConnectionComplete) => {
        let selectedNode = null;

        nodeElement.addEventListener('click', (event) => {

            const clickedNode = event.target.closest('.draggable-item');;
            console.log(clickedNode);
            if (clickedNode.classList.contains('draggable-item')) {

                if (selectedNode === null || selectedNode === clickedNode) {
                    selectedNode = clickedNode;
                } else {

                    onConnectionComplete(selectedNode.id, clickedNode.id, nodeElement);
                    selectedNode = null;
                }
            }
        });

    }
}