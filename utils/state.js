const state = {
    workflows: [],
    visualizers: [],
    nodes: {},
    connections: [],
    observers: [],
    addWorkflow(workflow) {
        this.workflows.push(workflow);
        this.notify();
    },
    addNode(nodeId, x, y) {
        if (!(nodeId in this.nodes)) {
            this.nodes[nodeId] = { node: nodeId, x: x, y: y };
            this.notify();
        } else {
            console.log("node already exists", nodeId);
        }
    },
    addConnection(fromNode, toNode) {
        if (!this.connections.find(conn => conn.from === fromNode && conn.to === toNode)) {
            this.connections.push({ from: fromNode, to: toNode });
            this.notify();
        }
        console.log(this.connections);
    },
    notify() {
        this.observers.forEach(observer => {
            observer({
                workflows: this.workflows,
                nodes: this.nodes,
                connections: this.connections
            });
        });
    },
    subscribe(fn) {
        this.observer.push(fn);
    }
}

export default state;