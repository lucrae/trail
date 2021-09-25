import { FC } from 'react';


import cashIcon from '../assets/icons/cash.png';


export const InventoryPanel: FC<{inventory: Inventory}> = ({ inventory }) => {
  const inventoryItemsRows = inventory.listItems().map((item, i) => (
    <div className="panel-row" key={i}>
      <div className="panel-row-icon icon"><img src={ `/images/icons/${item.name}.png` }  /></div>
      <div className="panel-row-text panel-row-grow">{ item.name }</div>
      <div className="panel-row-text">{ item.quantityFormatted() }</div>
    </div>) 
  )

  return (
    <div className="panel">
      <div className="panel-head">Inventory</div>
      { inventoryItemsRows }
    </div>
  )
}


export class Inventory {
  contents: Map<string, Item>;

  constructor() {
    this.contents = new Map();
  }

  addItem = (name: string, quantity: number,
             quantityFormatter: Function=String) => {
    // Add new item to inventory
    this.contents.set(name, new Item(name, quantity, quantityFormatter));
  }
  
  getItem = (name: string): Item | null => {
    // Return item, or null if not found
    const item = this.contents.get(name);
    return item ? item : null;
  }

  updateItem = (name: string, quantityChange: number) => {
    const item = this.getItem(name);
    if (item) {
      // Update quantity of item
      item.quantity += quantityChange;
    } else {
      // Item doesn't exist, add to inventory
      this.addItem(name, quantityChange);
    }
  } 

  listItems = (): Item[] => {
    return Array.from(this.contents.keys())
      .map((name: string) => this.contents.get(name)!);
  }
}


export class Item {
  name: string;
  quantity: number;
  quantityFormatter: Function;

  constructor(name: string, quantity: number,
              quantityFormatter: Function=(n: number) => `${n}`) {
      this.name = name;
      this.quantity = quantity;
      this.quantityFormatter = quantityFormatter;
  }

  quantityFormatted = () => this.quantityFormatter(this.quantity);
}
