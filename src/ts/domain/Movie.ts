import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
      readonly name: string, 
      readonly year: number, 
      readonly country: string, 
      readonly tagline: string, 
      readonly genre: string, 
      readonly movieDuration: number,
      readonly price: number,
      readonly id: number
    ) {  }
  }
