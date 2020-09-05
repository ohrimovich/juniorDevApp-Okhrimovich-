import { Component} from '@angular/core';
import { RandomNumberService } from 'src/app/services/random-number.service';
import { MatDialog } from '@angular/material/dialog';
import { ContentForModalComponent } from '../content-for-modal/content-for-modal.component'; 

@Component({
  selector: 'app-history-buttun',
  templateUrl: './history-buttun.component.html',
  styleUrls: ['./history-buttun.component.scss']
})
export class HistoryButtunComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ContentForModalComponent);
  }
}


