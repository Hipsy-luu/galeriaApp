import { Component, OnInit } from '@angular/core';
import { ConnectionAppiService } from '../../services/connection-appi.service';

@Component({
  selector: 'app-history-trans',
  templateUrl: './history-trans.page.html',
  styleUrls: ['./history-trans.page.scss'],
})
export class HistoryTransPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService) { }

  ngOnInit() {
    //this.connectionService.initializeSelectedItems(1);
  }
}
