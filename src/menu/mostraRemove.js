"use strict";
exports.__esModule = true;
exports.remove = void 0;
var PromptSync = require("prompt-sync");
var mostraTudo_1 = require("./mostraTudo");
var prompt = PromptSync();
function remove(inventario) {
    (0, mostraTudo_1.mostrar)(inventario);
    console.log('digite o item que quer remove');
    var remove = prompt('>> ');
    inventario.forEach(function (item, index) {
        if (item == remove) {
            inventario.splice(index, 1, item);
            console.clear();
        }
    });
}
exports.remove = remove;
