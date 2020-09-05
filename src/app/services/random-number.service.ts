import { Injectable } from '@angular/core';
interface RandomTime {
  time: Date,
  num: number
}
@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {
  randomNumber: number 
  contentArr: RandomTime[] = []
  constructor() { }

  public getRandomNumber(min: number = 0, max: number = 100): number {
    this.randomNumber = Math.round(Math.random() * (max - min) + min);
    this.createContentObj();
    return this.randomNumber
  }

 public createContentObj() {
   this.contentArr.push({
    time: new Date(),
    num: this.randomNumber
   }) 
 }



}
