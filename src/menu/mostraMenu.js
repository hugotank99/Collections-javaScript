"use strict";
exports.__esModule = true;
exports.add = void 0;
var PromptSync = require("prompt-sync");
var mostraTudo_1 = require("./mostraTudo");
var prompt = PromptSync();
function add(inventario) {
    (0, mostraTudo_1.mostrar)(inventario);
    console.log('digite o item');
    var item = prompt('>> ');
    inventario.push(item);
    console.clear();
}
exports.add = add;
