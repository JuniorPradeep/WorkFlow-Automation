import domUtils from "./domUtils.js";
import state from "./state.js";
let nodeCount = 0;
export function createNode(x, y) {
    const node = document.createElement('div');
    const id = `node-${nodeCount++}`;
    node.id = id;
    node.style.left = `${x}px`;
    node.style.right = `${y}px`;
    node.textContent = node.id;
    domUtils.makeDraggable(node);
    domUtils.addEventListeners(node, 'dragstart', domUtils.handleDragStart);
    state.addNode(node.id, x, y);
    return node;
}