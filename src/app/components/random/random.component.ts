import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from 'src/app/services/random-number.service';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  public triangleCenter: boolean = false;
  constructor(public randomNumberService: RandomNumberService) { }

  ngOnInit(): void {
  
  }

  get figureStyle() {
    if(this.randomNumberService.randomNumber <= 33) {
      this.triangleCenter = false
      return 'container__figure_square'
    }
    if(this.randomNumberService.randomNumber >= 33 && this.randomNumberService.randomNumber <= 66) {
      this.triangleCenter = false
      return 'container__figure_circle'
    }
    if(this.randomNumberService.randomNumber >= 66 && this.randomNumberService.randomNumber <= 99) {
      this.triangleCenter = true
      return 'container__figure_triangle'
    }
  }

}
