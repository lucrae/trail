import { Member } from './party';
import { Vehicle } from './vehicle';
import { Inventory } from './inventory';

export interface Player {
  party: Array<Member>;
  vehicle: Vehicle;
  inventory: Inventory;
  
  setParty: Function;
  setInventory: Function;
  setVehicle: Function;
}
