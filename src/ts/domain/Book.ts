import Buyable from './Buyable';

/**
 * Конструктор для инициализации книги
 * @constructor
 * @param {string} title - War and Piece
 * @param {string} author - Leo Tolstoy
*/
export default class Book implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly pages: number,
    ) { }
}