import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  randomNumber: number  = this.getRandomNumber(0,100)
  constructor() { }

  ngOnInit(): void {
  
  }

  public getRandomNumber(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

}
