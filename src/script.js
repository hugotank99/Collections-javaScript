"use strict";
exports.__esModule = true;
var PromptSync = require("prompt-sync");
var mostraTudo_1 = require("./Menu/mostraTudo");
var mostraRemove_1 = require("./Menu/mostraRemove");
var mostraAlteracao_1 = require("./Menu/mostraAlteracao");
var mostraMenu_1 = require("./menu/mostraMenu");
var prompt = PromptSync();
var option = 0;
do {
    console.log('1 - Armazenar um item ');
    console.log('2 - Remover um item ');
    console.log('3 - Atualizar um dado ');
    console.log('4 - Apresentar todos os dados ');
    console.log('0 - Sair ');
    option = Number(prompt('>  '));
    var inventario = [];
    switch (option) {
        case 1:
            (0, mostraMenu_1.add)(inventario);
            break;
        case 2:
            (0, mostraRemove_1.remove)(inventario);
            break;
        case 3:
            (0, mostraAlteracao_1.update)(inventario);
            break;
        case 4:
            (0, mostraTudo_1.mostrar)(inventario);
            break;
        case 0:
            break;
        default:
            console.log('Opção invalida');
            break;
    }
} while (option != 0);
