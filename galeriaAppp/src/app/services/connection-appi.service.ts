import { DumyData } from './../classes/dumyData.class';
import { Injectable } from '@angular/core';

import { Artist } from '../classes/artist.class';
import { Customer } from './../classes/customer.class';
import { Transaction } from './../classes/trans.class';
import { Work } from './../classes/work.class';

@Injectable({
  providedIn: 'root'
})
export class ConnectionAppiService {
  actualYear = new Date().getFullYear();
  actualSelectedArtist;
  actualSelectedCustomer;
  actualSelectedWork;
  actualTrans;

  opc : Number;
  public dumyData : DumyData;

  constructor() {
    this.dumyData = new DumyData(); 
    let actualYear = new Date().getFullYear();
    this.actualSelectedArtist = new Artist( 0 , "" , "" , "Mexican" , actualYear-1 , actualYear );
    this.actualSelectedCustomer = new Customer( 0 , "" , "" , "" , "" , "" , "" , "" , "" , "" , "" , "" );
    this.actualSelectedWork = new Work( 0 , "" , "" , "" , "" , 0 );
    this.actualTrans = new Transaction( 0 , "" , 0 , 0 , "10/10"+"/69",0,0,0 );
  }

  initializeSelectedItems(opc){
    switch (opc) {
      case 0:
        let actualYear = new Date().getFullYear();
        this.actualSelectedArtist = new Artist( 0 , "" , "" , "Mexican" , actualYear-1 , actualYear );
        break;
      case 1:
        this.actualSelectedCustomer = new Customer( 0 , "" , "" , "" , "" , "" , "" , "" , "" , "" , "" , "" );
        break;
      case 2:
        this.actualSelectedWork = new Work( 0 , "" , "" , "" , "" , 0 );
        break;
      case 3:
        this.actualTrans = new Transaction( 0 , "" , 0 , 0 , "10/10"+"/69",0,0,0 );
        break;
      default:
        break;
    }
    
    this.opc = 0;
  }
}
