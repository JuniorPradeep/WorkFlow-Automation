import domUtils from "./utils/domUtils.js";
import { createNode } from "./utils/nodeUtils.js";
const canvas = domUtils.$('#workflow-canvas');
domUtils.$$('.draggable-item').forEach(element => {
    domUtils.makeDraggable(element);
    element.addEventListener('dragstart', domUtils.handleDragStart)
});


canvas.addEventListener('dragover', domUtils.handleDragOver);
canvas.addEventListener('drop', (event) => {
    try {
        domUtils.handleDrop(event, canvas);
    } catch (err) {
        console.log(err);
    }
});

domUtils.$('#add-node-btn').addEventListener('click', (event) => {
    let node = createNode(100, 100);
    canvas.appendChild(node);
});