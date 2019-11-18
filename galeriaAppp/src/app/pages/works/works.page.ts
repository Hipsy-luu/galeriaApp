import { Component, OnInit } from '@angular/core';
import { ConnectionAppiService } from '../../services/connection-appi.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-works',
  templateUrl: './works.page.html',
  styleUrls: ['./works.page.scss'],
})
export class WorksPage implements OnInit {
  selectedAutor;

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(2);
  }

  actualizaritems(){
    this.connectionService.getAllWorks().then(async()=>{});
  }

  onSelected(work){
    this.connectionService.actualSelectedWork = work;
    this.connectionService.opc = 1;
    let index = this.connectionService.artists.findIndex((element) => element.artistid == work.artistid);
    this.selectedAutor = this.connectionService.artists[index];
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
  
  saveWork(){
    if(this.connectionService.opc==0){
      this.createWork();
    }else{
      this.updateWork();
    }
  }

  async createWork(){
    this.connectionService.createWork().then(async ()=>{
      this.connectionService.initializeSelectedItems(2);

      this.connectionService.getAllWorks().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado una nueva obra.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteWork(){
    this.connectionService.deleteWork().then(async ()=>{
      this.connectionService.initializeSelectedItems(2);

      this.connectionService.getAllWorks().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado una obra.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateWork(){
    this.connectionService.updateWork().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(2);

    this.connectionService.getAllWorks().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado una obra.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }
}
