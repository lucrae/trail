import { FC } from 'react';
import { Player } from './player';


const upgradeVehicle = (player: Player) => {

  const updatedInventory = {...player.inventory}
  updatedInventory.updateItem('cash', -20);

  const updatedVehicle = {
    ...player.vehicle,
    maxHealth: player.vehicle.maxHealth + 5,
  }

  // Update player state
  player.setInventory(updatedInventory);
  player.setVehicle(updatedVehicle);
}

export const TownPanel: FC<{player: Player}> = ({ player })=> {
  return (
    <div className="panel">
      <div className="panel-head">Town</div>
      <div className="panel-body">
        The vehicle is: { player.vehicle.name }&nbsp;
        <button onClick={() => upgradeVehicle(player)}>Upgrade</button>
      </div>
    </div>
  )
}
