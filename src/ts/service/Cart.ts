import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = []; 

    add(item: Buyable): void {
      this._items.push(item);
    }

    get items(): Buyable[] {
      return [...this._items]; 
    }

    getAmountWithoutDiscounts(): number {
      let amount = [];
      
      for(let item in this.items){
        amount.push(this.items[item].price);
      }
      
      return amount.reduce((sum, current) => sum + current, 0)
    }
  
    getDiscountedAmount (perc: number): number {
      let purchaseAmount = this.getAmountWithoutDiscounts();
      return purchaseAmount -= purchaseAmount * perc / 100;
    }

    delElement(index: number): any {
      return this._items = this._items.filter(item => item.id != index)
    }   
}
