import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {
  randomNumber: number 
  constructor() { }

  public getRandomNumber(min: number = 0, max: number = 100): number {
    return this.randomNumber = Math.round(Math.random() * (max - min) + min);
  }


}
