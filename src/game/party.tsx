import { FC } from 'react';

export const PartyPanel: FC<{party: Array<Member>}> = ({ party }) => {
  const partyMemberRows = party.map((member, i) => (
    <div className="panel-row" key={i}>
      <div className="panel-row-icon icon"><img src={ `/images/icons/faces/${member.faceId}.png` }  /></div>
      <div className="panel-row-text panel-row-grow">{ member.name }</div>
      <div className="panel-row-icon icon"><img src={ `/images/icons/heart.png` }  /></div>
        <div className="panel-row-text">{ member.health }/{ member.maxHealth }</div>
    </div>) 
  )

  return (
    <div className="panel">
      <div className="panel-head">Party</div>
      { partyMemberRows }
    </div>
  )
}


export class Member {
  name: string;
  faceId: number;
  health: number;
  maxHealth: number;

  constructor(name: string, faceId: number) {
    this.name = name;
    this.faceId = faceId;
    this.health = this.maxHealth = 10;
  }
}