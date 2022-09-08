import { Component, OnInit } from '@angular/core';
import { COUNTRY_CODES } from '../constants';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.scss'],
})
export class LoginsignupComponent implements OnInit {
  constructor() {}
  country: any = {};
  ngOnInit(): void {
    this.country = COUNTRY_CODES;
  }
}
