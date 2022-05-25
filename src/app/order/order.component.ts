import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero,Order } from '../hero';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  count:number=1
  orders:Order[]=[];
  onClick(e:any){
    this.count++
  }
  constructor(
    private heroService: HeroService) { }
  
  ngOnInit(): void {
    this.getOrders();
    
  }
  getOrders(): void {
    this.heroService.getOrderData()
        .subscribe(
          // ((data:Order) =>this.orders={
          //   _id: data._id,
          //   action: data.action
          // })
          // data =>console.log(data)
          data=> this.orders=data
        );
  }
}
