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
    this.connectionService.dumyData.trans.push(this.connectionService.actualTrans);
    this.connectionService.initializeSelectedItems(3);

    const alert = await this.alertController.create({
      subHeader: 'Guardado Exitoso',
      message: 'Se a registrado una nueva venta.Felicidades!',
      buttons: ['OK']
    });

    await alert.present();
  }

  onSelected(work){
    this.connectionService.actualSelectedWork = work;
    this.connectionService.opc = 1;
    let index = this.connectionService.dumyData.works.findIndex((element) => element.workid == work.workid);
    this.selectedWork = this.connectionService.dumyData.works[index];

    index = this.connectionService.dumyData.customers.findIndex((element) => element.customerid == work.customerid);
    this.selectedCustomer = this.connectionService.dumyData.customers[index];
  }

  resetData(){
    this.selectedWork = {}
    this.connectionService.initializeSelectedItems(2)
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
