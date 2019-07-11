
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

export class Notify {
    private static instance: Notify;
  static _toastController: any;
    private constructor( _toastController : ToastController) {

     }
    
    static getInstance() {
      if (!Notify.instance) {
        Notify.instance = new Notify(new ToastController());
      }
      return Notify.instance;
    }


    
    static async presentToast(message:string) {
        const toast =  this._toastController.create({
          message: message,
          duration: 2000
        });
        toast.present();
      }
      
  }