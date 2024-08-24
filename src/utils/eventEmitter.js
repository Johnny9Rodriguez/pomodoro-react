class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    addListener(event, func) {
        if (!this.listeners[event]) {
            // Init an empty list for new event types.
            this.listeners[event] = [];
        }
        this.listeners[event].push(func);
    }

    removeListener(event, func) {
        if (!this.listeners[event]) return;
        this.listeners[event] = this.listeners[event].filter((f) => f !== func);
    }

    emit(event, ...args) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach((func) => func(...args));
    }
}

const eventEmitter = new EventEmitter();

module.exports = { eventEmitter };
