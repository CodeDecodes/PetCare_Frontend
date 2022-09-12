import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { COUNTRY_CODES } from '../constants';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss'],
})
export class LoginsignupComponent implements OnInit {
  @Output() closePopUp: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  country: any = {};
  ngOnInit(): void {
    this.country = COUNTRY_CODES;
  }
  work() {
    this.closePopUp.emit(false);
  }
}
