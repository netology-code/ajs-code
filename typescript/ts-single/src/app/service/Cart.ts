import Buyable from '../domain/Buyable';

// export default class Cart {
//     private items: Buyable[] = [];

//     add(item: Buyable): void {
//         this.items.push(item);
//     }

//     getAll(): Buyable[] {
//         return [...this.items]; 
//     }
// }

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}