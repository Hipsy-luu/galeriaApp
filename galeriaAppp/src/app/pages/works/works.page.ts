import { Component, OnInit } from '@angular/core';
import { ConnectionAppiService } from '../../services/connection-appi.service';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-works',
  templateUrl: './works.page.html',
  styleUrls: ['./works.page.scss'],
})
export class WorksPage implements OnInit {
  selectedAutor;

  constructor(public connectionService :ConnectionAppiService) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(2);
  }

  onSelected(work){
    this.connectionService.actualSelectedWork = work;
    this.connectionService.opc = 1;
    let index = this.connectionService.dumyData.artists.findIndex((element) => element.artistid == work.artistid);
    this.selectedAutor = this.connectionService.dumyData.artists[index];
  }

  resetData(){
    this.selectedAutor = {}
    this.connectionService.initializeSelectedItems(2)
  }

  autorChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.connectionService.actualSelectedWork.artistid = event.value.artistid;
  }

}
