import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  myCheck: boolean = false;
  @Input()
  pressed!: boolean;
  constructor() {}

  ngOnInit(): void {}
  value() {
    if (this.myCheck) {
      this.myCheck = false;
      console.log(this.myCheck);
    } else {
      this.myCheck = true;
    }

    console.log('OUTER' + this.myCheck);
  }
}
