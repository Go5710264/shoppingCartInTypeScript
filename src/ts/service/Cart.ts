import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    withoutDiscounts(): number {
        let amount = [];
        
        for(let item in this.items){
          amount.push(this.items[item].price);
        }
        
        return amount.reduce((sum, current) => sum + current, 0)
      }
    
      withDiscount(perc: number): number {
        return this.withoutDiscounts() - this.withoutDiscounts() * perc / 100;
      }
  
      delElement(index: number) {
        Object.entries(this._items).forEach(([key, value]: any) => {
            if(value.id === index){
            delete this._items[key];
          }
        })
      }  
}