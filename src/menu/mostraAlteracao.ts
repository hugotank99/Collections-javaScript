import PromptSync = require("prompt-sync");
import { mostrar } from "./mostraTudo";

const prompt = PromptSync();

export function update (inventario: string[]){
        mostrar(inventario);

        console.log ('Digite o item que deseja atualizar');
        const atu = prompt ('>> ');

        inventario.forEach ((item, index) => {
            if (item == atu) {
                console.log('Digite a alteração');
                const new_item = prompt ('>>')

                inventario.splice (index, 1, new_item);

                console.clear
            }
        })
}