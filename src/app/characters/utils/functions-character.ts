import { Character } from "../interfaces/characters.interface";

export function seleccionarElementosAlAzar(array:Character[], cantidad:number) {
    
    const arrayCopia = array.slice();

    for (let i = arrayCopia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopia[i], arrayCopia[j]] = [arrayCopia[j], arrayCopia[i]];
    }

    return arrayCopia.slice(0, cantidad);

  }