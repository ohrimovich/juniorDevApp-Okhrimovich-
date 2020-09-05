import { Component } from '@angular/core';
import { RandomNumberService } from 'src/app/services/random-number.service'
@Component({
  selector: 'app-contentformodal',
  templateUrl: './content-for-modal.component.html',
  styleUrls: ['./content-for-modal.component.scss']
})
export class ContentForModalComponent {

  constructor(public randomNumberService: RandomNumberService) { }

  ngOnInit(): void {
    console.log(this.randomNumberService.contentArr)
  }

}
