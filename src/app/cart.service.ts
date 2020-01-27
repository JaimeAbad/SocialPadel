import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private data = [
    {
      category: 'Hora',
      expanded: true,
      products: [
        { id:0, price:'00:00' },
        { id:1, price:'00:30' },
        { id:2, price:'01:00' },
        { id:3, price:'01:30' },
        { id:4, price:'02:00' },
        { id:5, price:'02:30' },
        { id:6, price:'03:00' },
        { id:7, price:'03:30' },
        { id:8, price:'04:00' },
        { id:9, price:'04:30' },
        { id:10, price:'05:00' },
        { id:11, price:'05:30' },
        { id:12, price:'06:00' },
        { id:13, price:'06:30' },
        { id:14, price:'07:00' },
        { id:15, price:'07:30' },
        { id:16, price:'08:00' },
        { id:17, price:'08:30' },
        { id:18, price:'09:00' },
        { id:19, price:'09:30' },
        { id:20, price:'10:00' },
        { id:21, price:'10:30' },
        { id:22, price:'11:00' },
        { id:23, price:'11:30' },
        { id:24, price:'12:00' },
        { id:25, price:'12:30' },
        { id:26, price:'13:00' },
        { id:27, price:'13:30' },
        { id:28, price:'14:00' },
        { id:29, price:'14:30' },
        { id:30, price:'15:00' },
        { id:31, price:'15:30' },
        { id:32, price:'16:00' },
        { id:34, price:'16:30' },
        { id:35, price:'17:00' },
        { id:36, price:'17:30' },
        { id:37, price:'18:00' },
        { id:38, price:'18:30' },
        { id:39, price:'19:00' },
        { id:40, price:'19:30' },
        { id:41, price:'20:00' },
        { id:42, price:'20:30' },
        { id:43, price:'21:00' },
        { id:44, price:'21:30' },
        { id:45, price:'22:00' },
        { id:46, price:'22:30' },
        { id:47, price:'23:00' },
        { id:48, price:'23:30' },
      ]
    },
    {
      category: "Dia",
      expanded: true,
      products: [
        { id:1, price:'01' },
        { id:2, price:'02' },
        { id:3, price:'03' },
        { id:4, price:'04' },
        { id:5, price:'05' },
        { id:6, price:'06' },
        { id:7, price:'07' },
        { id:8, price:'08' },
        { id:9, price:'09' },
        { id:10, price:'10' },
        { id:11, price:'11' },
        { id:12, price:'12' },
        { id:13, price:'13' },
        { id:14, price:'14' },
        { id:15, price:'15' },
        { id:16, price:'16' },
        { id:17, price:'17' },
        { id:18, price:'18' },
        { id:19, price:'19' },
        { id:20, price:'20' },
        { id:21, price:'21' },
        { id:22, price:'22' },
        { id:23, price:'23' },
        { id:24, price:'24' },
        { id:25, price:'25' },
        { id:26, price:'26' },
        { id:27, price:'27' },
        { id:28, price:'28' },
        { id:29, price:'29' },
        { id:30, price:'30' },
        { id:31, price:'31' }
      ]
    },
    {
      category: "Lugar",
      expanded: true
    }
    ];

  private cart = [];

  getProducts(){
    return this.data;
  }
  getCart(){
    return this.cart;
  }
  addProduct(product){
    this.cart.push(product);
  }


}
