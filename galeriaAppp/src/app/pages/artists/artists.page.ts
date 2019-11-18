import { AlertController } from '@ionic/angular';
import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService,public alertController: AlertController) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(0);
  }

  actualizaritems(){
    this.connectionService.getAllArtists().then(async()=>{});
  }

  onSelected(artist){
    this.connectionService.actualSelectedArtist = artist;
    this.connectionService.opc = 1;
  }

  saveArtist(){
    if(this.connectionService.opc==0){
      this.createArtist();
    }else{
      this.updateArtist();
    }
  }

  async createArtist(){
    this.connectionService.createArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(0);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Guardado Exitoso',
          message: 'Se a registrado un nuevo artista.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async deleteArtist(){
    this.connectionService.deleteArtist().then(async ()=>{
      this.connectionService.initializeSelectedItems(0);

      this.connectionService.getAllArtists().then(async()=>{
        const alert = await this.alertController.create({
          subHeader: 'Borrado Exitoso',
          message: 'Se a borrado un artista.',
          buttons: ['OK']
        });
    
        await alert.present();
      })
    });
  }

  async updateArtist(){
    this.connectionService.updateArtist().then(async ()=>{
      
    });
    this.connectionService.initializeSelectedItems(0);

    this.connectionService.getAllArtists().then(async()=>{
      const alert = await this.alertController.create({
        subHeader: 'Actualizado Exitoso',
        message: 'Se a actualizado un artista.',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }
}
