import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero,Order } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //匯入HttpClient模

 
@Injectable({ providedIn: 'root' })
export class HeroService {
 
  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }
  // getOrderData(){
  //   const url='http://10.6.0.56/CCSClient/Order/GetUnFinishOrder?DbName=CCS&userId=19157&userRole=REMOTE&floors=3,4,5,6,7,8&deptRoles=MBD,TPT';
  //   return this.http.get(url)
  // }
  getOrderData(){
    const url='http://10.6.0.56/CCSClient/Order/GetUnFinishOrder?DbName=CCS&userId=19157&userRole=REMOTE&floors=3,4,5,6,7,8&deptRoles=MBD,TPT';
    return this.http.get<Order[]>(url)
  }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}