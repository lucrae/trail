import { useState } from 'react';
import { TownPanel } from './town';
import { formatMoney } from './utils';

import { PartyPanel, Member } from './party';
import { VehiclePanel, Car } from './vehicle';
import { InventoryPanel, Inventory } from './inventory';
import { Player } from './player';


const Game = () => {
  const startingParty = [
    new Member('Mathew', 0),
    new Member('Mark', 0),
    new Member('Luke', 0),
    new Member('John', 0)
  ];
  const startingVehicle = new Car();
  const startingInventory = new Inventory();
  startingInventory.addItem('cash', 50, formatMoney);
  startingInventory.addItem('fuel', 20, (n: number) => `${n}L`);

  // Initialise player state
  const [party, setParty] = useState(startingParty);
  const [vehicle, setVehicle] = useState(startingVehicle);
  const [inventory, setInventory] = useState(startingInventory);
  const player: Player = {
    party, vehicle, inventory,
    setParty, setVehicle, setInventory,
  };

  return (
    <div className="section-wrapper">
      <div className="section-side">
        <PartyPanel party={party} />
        <VehiclePanel vehicle={vehicle} />
        <InventoryPanel inventory={inventory} />
      </div>
      <div className="section-primary">
        <TownPanel player={player} />
      </div>
    </div>
  )
}

export default Game;