/**
 * Soma valores numéricos
 * @param  {...number} numeros Valores a serem somados
 * @returns Total da soma
 */
export function somarNumeros(...numeros) {
  return numeros.reduce((total, proximo) => total + proximo, 0);
}

/**
 * Soma valores numéricos presentes em um array
 * @param {number} numeros Valores a serem somados
 * @returns Total da soma
 */
export function somarNumerosArray(numeros) {
  return numeros.reduce((total, proximo) => total + proximo, 0);
}

/**
 * Soma, como valores numéricos, valores em strings
 * @param  {...string} numeros Valores a serem somados
 * @returns Total da soma
 */
export function somarStrings(...numeros) {
  const valores = numeros.map((n) => Number(n));
<<<<<<< HEAD:calculos/basicos-soma.js
  return somarNumeros(valores);
}

/**
 * Soma, como valores numéricos, valores presentes em um array de strings
 * @param {string} numeros Valores a serem somados
 * @returns Total da soma
 */
export function somarStringsArray(numeros) {
  const valores = numeros.map((n) => Number(n));
  return somarNumerosArray(valores);
}
=======
  return somarNumerosArray(valores);
}
>>>>>>> a19f80b (bug corrigido):calculos/basicos.js