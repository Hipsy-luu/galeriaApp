import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ConnectionAppiService } from '../../services/connection-appi.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pv',
  templateUrl: './pv.page.html',
  styleUrls: ['./pv.page.scss'],
})
export class PvPage implements OnInit {

  selectedWork;
  selectedCustomer;

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(3);
  }

  async createTrans(){
    this.connectionService.createTransaction().then(async ()=>{
      this.connectionService.initializeSelectedItems(3);

      this.connectionService.getAllTransactions().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado una nueva venta.Felicidades!',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  onSelected(work){
    this.connectionService.actualSelectedWork = work;
    this.connectionService.opc = 1;
    let index = this.connectionService.works.findIndex((element) => element.workid == work.workid);
    this.selectedWork = this.connectionService.works[index];

    index = this.connectionService.customers.findIndex((element) => element.customerid == work.customerid);
    this.selectedCustomer = this.connectionService.customers[index];
  }

  resetData(){
    this.selectedWork = {};
    this.selectedCustomer = {};
    this.connectionService.initializeSelectedItems(3)
  }

  workChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.connectionService.actualTrans.workid = event.value.workid;
  }

  customerChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.connectionService.actualTrans.customerid = event.value.customerid;
  }

}
