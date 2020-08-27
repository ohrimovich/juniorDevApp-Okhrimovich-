import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from 'src/app/services/random-number.service';


@Component({
  selector: 'app-history-buttun',
  templateUrl: './history-buttun.component.html',
  styleUrls: ['./history-buttun.component.scss']
})
export class HistoryButtunComponent implements OnInit {

  constructor(public randomNumberService: RandomNumberService) { }

  ngOnInit(): void {
  }

}
