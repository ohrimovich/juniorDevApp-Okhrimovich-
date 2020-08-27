import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {
  randomNumber: number 
  time: number
  contentObj: Object
  constructor() { }

  public getRandomNumber(min: number = 0, max: number = 100): number {
    let timeBefore = new Date();
    this.randomNumber = Math.round(Math.random() * (max - min) + min);
    let timeAfter = new Date();
    this.time = timeAfter.getSeconds() - timeBefore.getSeconds();
    this.createContentObj();
    return this.randomNumber
  }

 public createContentObj() {
  return this.contentObj = {
    time: this.time,
    num: this.randomNumber
   }
 }



}
