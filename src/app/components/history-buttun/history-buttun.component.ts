import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from 'src/app/services/random-number.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-history-buttun',
  templateUrl: './history-buttun.component.html',
  styleUrls: ['./history-buttun.component.scss']
})
export class HistoryButtunComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

}
}

    @Component({
      selector: 'dialog-content',
      templateUrl: './dialog-content.html',
    })
    export class DialogContent {
      constructor(public randomNumberService: RandomNumberService) {}
    }
