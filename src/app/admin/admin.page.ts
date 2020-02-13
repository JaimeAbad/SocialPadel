import { Component, OnInit, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { formatDate } from '@angular/common';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase';

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
    mode: 'month',
    currentDate: new Date()
  }

  viewTitle='';

  @ViewChild(CalendarComponent,null) myCal: CalendarComponent[];


  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID)private locale: string){

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

  addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc:this.event.desc
    }
    if(eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

// , start.getHours(), start.getMinutes() + start.getTimezoneOffset()
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
    // eventCopy.startTime = new Date(Date.UTC(eventCopy.startTime.getUTCFullYear(), eventCopy.startTime.getUTCMonth(), eventCopy.startTime.getUTCDate(), eventCopy.startTime.getHours() + eventCopy.startTime.getTimezoneOffset()/60));

    // console.log("timezone");
    // console.log(eventCopy.startTime.getHours()-eventCopy.startTime.getTimezoneOffset()/60);
    // console.log("hora");
    // console.log(eventCopy.startTime.getHours());
    // console.log("mira");
    // console.log(eventCopy);


    this.eventSource.push(eventCopy);
    // aqui lo subo a firebase
    let id=  new Date().getTime();
    firebase.database().ref(`eventos/${id}`).update(eventCopy);
    // this.myCal.loadEvents();
    this.resetEvent();

  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  back(){
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  next(){
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }
  today() {
    this.calendar.currentDate = new Date();
  }

  async onEventSelected(event) {
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: start,
      // 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }


// Muestra la misma hora
  onTimeSelected(ev) {

    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
    // let selected = new Date(ev.selectedTime);
    // this.event.startTime = selected.toISOString();
    // console.log("this.event.startTime");
    // console.log(this.event.startTime);
    //
    // selected.setHours(selected.getHours() + 5);
    // // console.log("selected.setHours(selected.getHours() + 3)");
    // // console.log(selected.setHours(selected.getHours() + 6));
    // this.event.endTime = (selected.toISOString());
    // console.log("this.event.endTime");
    // console.log(this.event.endTime);

  }




}
