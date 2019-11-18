import { Injectable } from '@angular/core';

import { Artist } from '../classes/artist.class';
import { Customer } from './../classes/customer.class';
import { Transaction } from './../classes/trans.class';
import { Work } from './../classes/work.class';

import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class ConnectionAppiService {
  url = "http://localhost:4000";

  actualYear = new Date().getFullYear();
  actualSelectedArtist;
  actualSelectedCustomer;
  actualSelectedWork;
  actualTrans;

  artists = [];
  customers = [];
  trans = [];
  works = [];

  opc : Number;

  constructor(public httpClient: HttpClient) {

    let actualYear = new Date().getFullYear();
    this.actualSelectedArtist = new Artist( 0 , "" , "" , "Mexican" , actualYear-1 , actualYear , false );
    this.actualSelectedCustomer = new Customer( 0 , "" , "" , "" , "" , "" , "" , "" , "" , "" , "" , "" , false);
    this.actualSelectedWork = new Work( 0 , "" , "" , "" , "" , 0 , false);
    this.actualTrans = new Transaction( 0 , "" , 0 , 0 , "10/10"+"/69",0,0,0 , false);
    this.getAllData().then((response)=>{
      console.log(response);
    });
  }

  getAllData(){
    return new Promise((resolve,reject)=>{
      this.getAllArtists().then(()=>{
        this.getAllCustomers().then(()=>{
          this.getAllTransactions().then(()=>{
            this.getAllWorks().then(()=>{
              resolve("Todo obtenido con exito");
            });
          });
        });
      });
    })
  }

  getAllArtists(){
    return new Promise((resolve,reject)=>{
      this.httpClient.get(this.url+'/artists')
        .subscribe((artists : any) => {
          this.artists = artists;
          resolve();
        })
    })
  }

  createArtist(){
    return new Promise((resolve,reject)=>{
      this.httpClient.post(this.url+'/artists',this.actualSelectedArtist)
        .subscribe(data => {
          resolve(data);
        })
    })
  }

  deleteArtist(){
    return new Promise((resolve,reject)=>{
      this.httpClient.delete(this.url+'/artists/'+this.actualSelectedArtist.artistid)
        .subscribe(() => {
          resolve();
        })
    })
  }

  updateArtist(){
    return new Promise((resolve,reject)=>{
      this.httpClient.put(this.url+'/artists/'+this.actualSelectedArtist.artistid, this.actualSelectedArtist)
        .subscribe(() => {
          resolve();
        });
    })
  }

  getAllCustomers(){
    return new Promise((resolve,reject)=>{
      this.httpClient.get(this.url+'/customers')
        .subscribe((customers : any)=>{
          this.customers = customers;
          resolve();
        })
    })
  }

  createCustomer(){
    return new Promise((resolve,reject)=>{
      this.httpClient.post(this.url+'/customers',this.actualSelectedCustomer)
        .subscribe(() => {
          resolve();
        })
    })
  }

  deleteCustomer(){
    return new Promise((resolve,reject)=>{
      this.httpClient.delete(this.url+'/customers/'+this.actualSelectedCustomer.customerid)
        .subscribe(() => {
          resolve();
        })
    })
  }

  updateCustomer(){
    return new Promise((resolve,reject)=>{
      this.httpClient.put(this.url+'/customers/'+this.actualSelectedCustomer.customerid, this.actualSelectedCustomer)
        .subscribe(() => {
          resolve();
        });
    })
  }

  getAllTransactions(){
    return new Promise((resolve,reject)=>{
      this.httpClient.get(this.url+'/transactions')
        .subscribe((trans : any)=>{
          this.trans = trans;
          resolve();
        })
    })
  }

  createTransaction(){
    return new Promise((resolve,reject)=>{
      this.httpClient.post(this.url+'/transactions',this.actualTrans)
        .subscribe(() => {
          resolve();
        })
    })
  }

  getAllWorks(){
    return new Promise((resolve,reject)=>{
      this.httpClient.get(this.url+'/works')
        .subscribe((works : any)=>{
          this.works = works;
          resolve();
        })
    })
  }

  createWork(){
    return new Promise((resolve,reject)=>{
      this.httpClient.post(this.url+'/works',this.actualSelectedWork)
        .subscribe(data => {
          resolve(data);
        })
    })
  }

  deleteWork(){
    return new Promise((resolve,reject)=>{
      this.httpClient.delete(this.url+'/works/'+this.actualSelectedWork.workid)
        .subscribe(() => {
          resolve();
        })
    })
  }

  updateWork(){
    return new Promise((resolve,reject)=>{
      this.httpClient.put(this.url+'/works/'+this.actualSelectedWork.workid, this.actualSelectedWork)
        .subscribe(() => {
          resolve();
        });
    })
  }

  initializeSelectedItems(opc){
    switch (opc) {
      case 0:
        let actualYear = new Date().getFullYear();
        this.actualSelectedArtist = new Artist( 0 , "" , "" , "Mexican" , actualYear-1 , actualYear, false );
        break;
      case 1:
        this.actualSelectedCustomer = new Customer( 0 , "" , "" , "" , "" , "" , "" , "" , "" , "" , "" , "", false );
        break;
      case 2:
        this.actualSelectedWork = new Work( 0 , "" , "" , "" , "" , 0, false );
        break;
      case 3:
        this.actualTrans = new Transaction( 0 , "" , 0 , 0 , "10/10"+"/69",0,0,0 , false);
        break;
      default:
        break;
    }
    
    this.opc = 0;
  }
}
