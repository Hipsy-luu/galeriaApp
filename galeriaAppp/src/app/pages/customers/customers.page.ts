import { Component, OnInit } from '@angular/core';
import { ConnectionAppiService } from '../../services/connection-appi.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(1);
  }

  onSelected(customer){
    this.connectionService.actualSelectedCustomer = customer;
    this.connectionService.opc = 1;
  }

}
