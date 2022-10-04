"use strict";
exports.__esModule = true;
exports.update = void 0;
var PromptSync = require("prompt-sync");
var mostraTudo_1 = require("./mostraTudo");
var prompt = PromptSync();
function update(inventario) {
    (0, mostraTudo_1.mostrar)(inventario);
    console.log('Digite o item que deseja atualizar');
    var atu = prompt('>> ');
    inventario.forEach(function (item, index) {
        if (item == atu) {
            console.log('Digite a alteração');
            var new_item = prompt('>>');
            inventario.splice(index, 1, new_item);
            console.clear;
        }
    });
}
exports.update = update;
