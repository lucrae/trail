import { FC } from 'react';


export const VehiclePanel: FC<{vehicle: Vehicle}> = ({ vehicle }) => {
  return (
    <div className="panel">
      <div className="panel-head">Vehicle</div>
      <div className="panel-row">
        <div className="panel-row-icon icon"><img src={ `/images/icons/${vehicle.name}.png` }  /></div>
        <div className="panel-row-text panel-row-grow">{ vehicle.name }</div>
        <div className="panel-row-icon icon"><img src={ `/images/icons/heart.png` }  /></div>
        <div className="panel-row-text">{ vehicle.health }/{ vehicle.maxHealth }</div>
      </div>
    </div>
  )
}


export class Vehicle {
  name: string;
  health: number;
  maxHealth: number;

  constructor(name: string, maxHealth: number) {
    this.name = name;
    this.health = maxHealth;
    this.maxHealth = maxHealth;
  }
}


export class Car extends Vehicle {
  constructor() {
    super('car', 20);
  }
}
