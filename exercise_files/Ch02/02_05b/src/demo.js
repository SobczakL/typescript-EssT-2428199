function clone(source) {
    return Object.apply({}, source);
}
var a = { id: 1, name: "bob" };
var b = clone(a);
