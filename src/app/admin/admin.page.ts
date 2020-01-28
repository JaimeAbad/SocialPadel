import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { Router } from '@angular/router';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';

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

  onEventSelected(event){
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  addEvent(){

  }






  addToCart(product){
    this.cartService.addProduct(product);
  }
  openCart(){
    this.router.navigate(['cart']);
  }

}
