/**
 * La función suma devuelve la suma aritmética de dos parámetros
 * @param a El primer parámetro a sumar
 * @param b El segundo parámetro a sumar
 * @returns La suma aritmética de a y b
 */
const suma = (a: number, b: number) => a + b

/**
 * Obtiene el número de letras del nombre que le pasamos por parámetro
 * @param nombre El nombre del cual queremos obtener el número de letras
 * @returns El número de letras del nombre
 */
const obtenNumeroLetras = (nombre: string) => nombre.length

export { suma, obtenNumeroLetras }
