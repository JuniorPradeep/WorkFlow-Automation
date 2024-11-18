import domUtils from "./utils/domUtils.js";
import { createNode, drawConnection } from "./utils/nodeUtils.js";

const workFlowCanvas = domUtils.$('#workflow-canvas');
let selectedNode = null;
/* Draggable Events  */

domUtils.$$('.draggable-item').forEach(item => {
    domUtils.makeDraggable(item);
    document.addEventListener('dragstart', domUtils.handleDragStart);
});

workFlowCanvas.addEventListener('dragover', domUtils.handleDragOver);
workFlowCanvas.addEventListener('drop', (event) => domUtils.handleDrop(event, workFlowCanvas));


/* Nodes Elements  Tree */
const node1 = createNode(45, 2, 'Node 1');
const node2 = createNode(35, 25, 'Node 2');
const node3 = createNode(55, 25, 'Node 3');
const node4 = createNode(25, 45, 'Node 4')
const node5 = createNode(65, 45, 'Node 5');
const nodes = [node1, node2, node3, node4, node5];
nodes.forEach(node => workFlowCanvas.appendChild(node))

/* Node Connection Logic */
domUtils.addConnectionHandler(workFlowCanvas, drawConnection);