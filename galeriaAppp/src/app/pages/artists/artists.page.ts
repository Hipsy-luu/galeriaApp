import { ConnectionAppiService } from './../../services/connection-appi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {

  constructor(public connectionService :ConnectionAppiService) { }

  ngOnInit() {
    this.connectionService.initializeSelectedItems(0);
  }

  onSelected(artist){
    this.connectionService.actualSelectedArtist = artist;
    this.connectionService.opc = 1;
  }
}
