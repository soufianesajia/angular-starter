import { Injectable } from '@angular/core';
import { ElementList } from '../_models/ElementList';
import { ElementLevel } from '../_models/ElementLevel';



@Injectable()
export class ElementService {


  getElementLevel() {

    return [
      new ElementLevel('Parc', 'Parc' ),
      new ElementLevel('Site', 'Site' ),
      new ElementLevel('Station', 'Station' ),
      new ElementLevel('Charger', 'Charger' )
    ];


  }

  getElementList() {
    return [
      new ElementList(1, 'Parc', 'p1' ),
      new ElementList(2, 'Parc', 'p2' ),
      new ElementList(3, 'Site', 'site 1'),
      new ElementList(4, 'Site', 'site 2'),
      new ElementList(5, 'Station', 'station 1' ),
      new ElementList(6, 'Station', 'station 2'),
      new ElementList(7, 'Charger', 'charger 1' ),
      new ElementList(8, 'Charger', 'charge 2' ),

    ];
  }
}
