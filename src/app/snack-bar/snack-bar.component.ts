import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  //data: String;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
//    this.data = 'test';
  }

  ngOnInit() {
    console.log('test123');
  }

  test(wiadomosc){
    this.data = wiadomosc;
  }

}
