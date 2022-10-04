import PromptSync = require("prompt-sync");
import { mostrar } from "./mostraTudo";

const prompt = PromptSync();

export function add (inventario: string[]){
    mostrar(inventario);

    console.log('digite o item');
    const item = prompt ('>> ');

    inventario.push (item);

    console.clear();
}