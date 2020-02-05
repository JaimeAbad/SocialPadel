import { Component, OnInit, ViewChildren } from '@angular/core';
// import { CartService } from './../cart.service';
// import { Router } from '@angular/router';
// import { NavController, ModalController, AlertController } from '@ionic/angular';
// import * as moment from 'moment';
// import { EventModalPage } from '../event-modal/event-modal.page';
import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit{



  event = {
    title:'',
    desc:'',
    startTime:'',
    endTime:'',
    allDay: false
  };
  minDate = new Date().toISOString();

  eventSource = [];

  calendar = {
    mode: 'day',
    currentDate: new Date()
  }

  viewTitle='';

  @ViewChildren(CalendarComponent) myCal: CalendarComponent[];


  constructor(){

  }
  ngOnInit() {
    this.resetEvent();
  }
  resetEvent() {
    this.event = {
      title:'',
      desc:'',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  onEventSelectd() {

  }

  onViewTitleChanged() {

  }

  onTimeSelected() {

  }

  addEvent() {
    let eventCopy = {
      title: this.event.title,
      desc:this.event.desc,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay
    }
    if(eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;


      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents()
    this.resetEvent();
  }




  // eventSource = [];
  // viewTitle: string;
  // selectedDay = new Date();
  // startTime:Date;
  // endTime:Date;
  //
  // cart = [];
  // items = [];
  //
  // sliderConfig = {
  //   spaceBetween: 10,
  //   centeredSlides: true,
  //   slidesPreview: 1.6
  // }
  //
  // calendar = {
  //   mode: 'month',
  //   currentDate: this.selectedDay
  // }
  //
  // constructor(private alertCtrl: AlertController, private modalCtrl: ModalController ,private cartService: CartService, private router: Router, public navCtrl: NavController){}
  //
  // ngOnInit(){
  //   this.cart = this.cartService.getCart();
  //   this.items = this.cartService.getProducts();
  // }
  //
  // onViewTitleChanged(title){
  //   this.viewTitle = title;
  // }
  // onTimeSelected(ev){
  //   this.selectedDay = ev.selectedTime;
  // }
  //
  // async onEventSelected(event){
  //   let start = moment(event.startTime).format('LLLL');
  //   let end = moment(event.endTime).format('LLLL');
  //
  //   let alert = await this.alertCtrl.create({
  //     message: '' + event.title,
  //     subHeader: 'From: ' + start + '<br>To: ' + end,
  //     buttons: ['OK']
  //   });
  //   await alert.present()
  // }
  //
  // async addEvent(){
  //   let modal = await this.modalCtrl.create({
  //     component: EventModalPage,
  //     componentProps: { selectedDay: this.selectedDay }
  //   });
  //   await modal.present();
  //
  //   modal.onDidDismiss().then((data) =>{
  //     if(data){
  //       let eventData = data;
  //
  //       eventData.startTime = new Date(data.startTime);
  //       eventData.endTime = new Date(data.endTime);
  //
  //       let events = this.eventSource;
  //       events.push(eventData);
  //       this.eventSource = [];
  //       setTimeout(() => {
  //         this.eventSource = events;
  //       })
  //     }
  //   });
  //
  // }
  //
  //
  //
  //
  //
  //
  // addToCart(product){
  //   this.cartService.addProduct(product);
  // }
  // openCart(){
  //   this.router.navigate(['cart']);
  // }

}
