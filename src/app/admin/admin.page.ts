import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { Router } from '@angular/router';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { EventModalPage } from '../event-modal/event-modal.page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  cart = [];
  items = [];

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPreview: 1.6
  }

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }

  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController ,private cartService: CartService, private router: Router, public navCtrl: NavController){}

  ngOnInit(){
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  onTimeSelected(ev){
    this.selectedDay = ev.selectedTime;
  }

  async onEventSelected(event){
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = await this.alertCtrl.create({
      message: '' + event.title,
      subHeader: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    });
    await alert.present()
  }

  async addEvent(){
    let modal = await this.modalCtrl.create({
      component: EventModalPage,
      componentProps: { selectedDay: this.selectedDay }
    });
    await modal.present();

    modal.onDidDismiss(data =>{
      if(data){
        let eventData = data;

        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        // let events = this.eventSource;
        // events.push(eventData);
        // this.eventSource = [];
        // setTimeout(() => {
        //   this.eventSource = events;
        // })
      }
    });

  }






  addToCart(product){
    this.cartService.addProduct(product);
  }
  openCart(){
    this.router.navigate(['cart']);
  }

}
