['Array', 'String', 'Object', 'Number', 'Undefined', 'Null', 'Symbol', 'Function', 'Boolean', 'Date', 'Math', 'RegExp'].forEach(item => {
    exports[`is${item}`] = args => Object.prototype.toString.call(args) === `[object ${item}]`;
});
