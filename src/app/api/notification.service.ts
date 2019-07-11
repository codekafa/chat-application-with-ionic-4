import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})


export class NotificationService {


  constructor(private toastr : ToastController) { 

  }

  async successToast(message) {
    const t = await this.toastr.create({
      message: message,
    duration: 1300,
      cssClass: "toast-success",
      position: 'top'
    });
    t.present();
  }

  
  async warningToast(message) {
    const t = await this.toastr.create({
      message: message,
      duration: 1300,
      cssClass: "toast-warning",
      position: 'top'
    });
    t.present();
  }
  async dangerToast(message) {
    const t = await this.toastr.create({
      message: message,
      duration: 1300,
      cssClass: "toast-danger",
      position: 'top'
    });
    t.present();
  }
}
