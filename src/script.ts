import PromptSync = require("prompt-sync");
import { mostrar } from "./Menu/mostraTudo";
import { remove } from "./Menu/mostraRemove";
import { update } from "./Menu/mostraAlteracao";
import { add } from "./menu/mostraMenu";
const prompt = PromptSync();

let option = 0

do {

    console.log ('1 - Armazenar um item ');
    console.log ('2 - Remover um item ');
    console.log ('3 - Atualizar um dado ');
    console.log ('4 - Apresentar todos os dados ');
    console.log ('0 - Sair ');


        option = Number(prompt('>  '));

    const inventario: string[] = [];


        switch (option) {
            case 1:
                add (inventario);
                break;
            case 2:
                remove (inventario);
                break;
            case 3:
                update (inventario);
                break;
            case 4:
                mostrar (inventario);
                break;
            case 0:
                break
            default:
                console.log ('Opção invalida');
                break;
    }
}   while(option != 0);

