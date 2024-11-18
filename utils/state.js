const state = {
    workflows: [],
    intializers: [],
    nodes: {},
    connections: [],
    observers: [],
    addWorkflow(workflow) {
        this.workflows.push(workflow);
        this.notify();
    },
    addNode(nodeId, x, y) {
        if (!this.nodes[nodeId]) {
            this.nodes[nodeId] = [nodeId, x, y];
            this.notify();
        } else {
            console.log(`node Already exists${nodeId}`);
        }
    },
    notify() {
        this.observers.forEach(observer => {
            observer({ workflows: this.workflows, nodes: this.nodes });
        })
    },
    subscribe(fn) {
        this.observers.push(fn);
    }

}
export default state;