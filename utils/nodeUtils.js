import domUtils from "./domUtils.js";
import state from "./state.js";
let nodeCount = 0;
export function createNode(x, y, title) {
    const node = document.createElement('div');
    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
    node.classList.add('draggable-item');
    node.id = `node-${nodeCount++}`;
    node.innerHTML = `<div class="title">${title}</div>`;
    domUtils.makeDraggable(node)
    node.addEventListener('dragstart', domUtils.handleDragStart);
    state.addNode(node.id, x, y);
    return node;
}




export function drawConnection(fromNodeId, toNodeId, canvas) {
    console.log("Data", fromNodeId, toNodeId);
    const canvasRect = canvas.getBoundingClientRect();
    const fromNode = document.getElementById(fromNodeId);
    const toNode = document.getElementById(toNodeId);
    const fromRect = fromNode.getBoundingClientRect();
    const toRect = toNode.getBoundingClientRect();
    const fromX = fromRect.left + fromRect.width / 2 - canvasRect.left;
    const fromY = fromRect.top + fromRect.height / 2 - canvasRect.top;
    const toX = toRect.left + toRect.width / 2 - canvasRect.left;
    const toY = toRect.top + toRect.height / 2 - canvasRect.top;
    const svg = document.getElementById('connection-layer');
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', fromX);
    line.setAttribute('y1', fromY);
    line.setAttribute('x2', toX);
    line.setAttribute('y2', toY);
    line.setAttribute('stroke', 'black');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);
    state.addConnection(fromNodeId, toNodeId);
}