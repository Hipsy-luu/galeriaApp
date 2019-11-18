import { Component, OnInit } from '@angular/core';
import { ConnectionAppiService } from '../../services/connection-appi.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(1);
    this.actualizaritems();
  }

  actualizaritems(){
    this.connectionService.getAllCustomers().then(async()=>{});
  }

  onSelected(customer){
    this.connectionService.actualSelectedCustomer = customer;
    this.connectionService.opc = 1;
  }

  saveCustomer(){
    if(this.connectionService.opc==0){
      this.createCustomer();
    }else{
      this.updateCustomer();
    }
  }

  async createCustomer(){
    this.connectionService.createCustomer().then(async ()=>{
      this.connectionService.initializeSelectedItems(1);

      this.connectionService.getAllCustomers().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo cliente.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteCustomer(){
    this.connectionService.deleteCustomer().then(async ()=>{
      this.connectionService.initializeSelectedItems(1);

      this.connectionService.getAllCustomers().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado un cliente.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateCustomer(){
    this.connectionService.updateCustomer().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(1);

    this.connectionService.getAllCustomers().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado un cliente.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

}
