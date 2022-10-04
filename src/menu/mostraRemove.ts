import PromptSync = require("prompt-sync");
import { mostrar } from "./mostraTudo";

const prompt = PromptSync();

export function remove(inventario: string[]){
    mostrar(inventario);

    console.log('digite o item que quer remove');
    const remove = prompt('>> ');

    inventario.forEach((item,index) => {
        if (item == remove) {
            inventario.splice (index, 1, item);
            console.clear ();
         }
    })
}