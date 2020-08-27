import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from 'src/app/services/random-number.service';
@Component({
  selector: 'app-content-for-modal',
  templateUrl: './content-for-modal.component.html',
  styleUrls: ['./content-for-modal.component.scss']
})
export class ContentForModalComponent implements OnInit {

  constructor(public randomNumberService: RandomNumberService) { }

  ngOnInit(): void {
  }

}
